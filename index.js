// console.log("hi mundo");
require('dotenv').config();
const express = require('express');

const cors = require(' cors ');
const { dbConection } = require('./database/config');



const app = express();

//Cors uso
app.use(cors());

///Coneccion 
dbConection();
// console.log(process.env);

app.get('/', (req, res) => {


    res.status(400).json({
        ok: true,
        msg: 'Hola Mundo'
    })
});



app.listen(process.env.PORT, () => {
    console.log('hola desde el porto ', process.env.PORT)
});