module.exports.formulario_inclusao_noticia = function(app, req, res){
    res.render("admin/form_add_noticia", {validacao: {}, noticia:{}})
}

module.exports.noticias_salvar = function(app, req, res){
    const noticia = req.body 

    // tratamento de validação dos campos dos formulários 
    req.assert('titulo', 'Título é obrigatório').notEmpty()
    req.assert('resumo', 'Resumo é obrigatório').notEmpty()
    req.assert('resumo', 'Resumo deve conter de 10 a 100 caracteres').len(10, 100)
    req.assert('autor', 'Autor é obrigatório').notEmpty()
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'})
    req.assert('noticia', 'Noticia é obrigatório').notEmpty()

    const erros = req.validationErrors()

        if(erros){
        res.render("admin/form_add_noticia", {validacao : erros, noticia: noticia})
        return
    }


    const connection = app.config.dbConnection()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.salvarNoticia(noticia, function(error, result){
        res.redirect('/noticias')
    })
}