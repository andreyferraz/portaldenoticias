module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query("SELECT * FROM noticias", callback)
    }

    this.getNoticia = function(connection, callback){
        connection.query("SELECT * FROM noticias where id_noticia = 1", callback)
    }

    return this
}