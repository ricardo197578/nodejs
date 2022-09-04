import express from 'express';
import router from './routes/index.js';

const app = express();

//definir puerto
const port = process.env.PORT || 4000;
// Agregar Router usamos .use xq soporta todos los verbos 
app.use('/',router);
//Habilitando template de pug
app.set('view engine','pug');

app.listen(port,() =>{
	console.log(`Servidor corriendo puerto ${port}`)
})


