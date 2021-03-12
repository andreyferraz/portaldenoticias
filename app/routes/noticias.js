
module.exports = function(app){

    app.get('/noticias', function(req,res){
        const connection = app.config.dbConnection()
        const noticiasModel = app.app.models.noticiasModel

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticias', { noticias : result })
        })
    })
}

