
module.exports = function(app){

    app.get('/noticia', function(req,res){
        const connection = app.config.dbConnection()
        const noticiasModel = new app.app.models.NoticiasDAO(connection)
        
        noticiasModel.getNoticia(function(error, result){
            res.render('noticias/noticia', { noticia : result })
        })
    })
}

