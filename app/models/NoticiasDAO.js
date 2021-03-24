function NoticiasDAO(connection){
    this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function(callback){
  this._connection.query("SELECT * FROM noticias", callback)
}

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query("SELECT * FROM noticias where id_noticia = 5", callback)
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._connection.query('insert into noticias set ?', noticia, callback)
}

NoticiasDAO.prototype.getCincoUltimasNoticias = function(){
        this._connection.query('select * from noticias order by data_noticia desc limit 5', callback)
}

module.exports = function(){
    return NoticiasDAO
}