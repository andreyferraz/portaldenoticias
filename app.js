const app = require('./config/server')

const rotaNoticias = require('./app/routes/noticias')
rotaNoticias(app)

const rotaHome = require('./app/routes/home')
rotaHome(app)

const rotaFormularioInclusao = require('./app/routes/formulario_inclusao_noticia')
rotaFormularioInclusao(app)

app.listen(3000, function(){
    console.log("Servidor Ativado")
})