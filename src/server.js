// Requerir los módulos
import express from 'express'
import morgan from 'morgan'
import router from './routers/generadorRouters.js'


// Inicializaciones
const app = express()
app.use(morgan('dev'))

// Variables
app.set('port', process.env.port || 3000)


// Middlewares 
app.use(express.json())


// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})


// Rutas 
app.use('/campos', router)


// Manejo de una ruta que no sea encontrada
app.use((req,res)=>res.status(404).send("Endpoint no encontrado - 404"))

// Exportar la instancia de express por medio de app
export default  app