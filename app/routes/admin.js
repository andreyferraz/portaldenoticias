module.exports = function(app){

    app.get('/formulario_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia")
    })

    app.post('/noticias/salvar', function(req, res){
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
            res.render("admin/form_add_noticia")
            return
        }

        const connection = app.config.dbConnection()
        const noticiasModel = new app.app.models.NoticiasDAO(connection)

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias')
        })
    })
}

