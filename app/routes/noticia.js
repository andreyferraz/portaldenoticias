
module.exports = function(app){

    app.get('/noticia', function(req,res){
        const connection = app.config.dbConnection()
        const noticiasModel = app.app.models.noticiasModel
        
        noticiasModel.getNoticia(connection, function(error, result){
            res.render('noticias/noticia', { noticia : result })
        })
    })
}

