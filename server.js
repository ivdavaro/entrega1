const express  = require('express');
const http = require('http'); 
const axios = require('axios');

const app = express();
app.set('view engine', 'ejs')

app.get('/', (req,res) =>{
    console.log(req.query);
    axios.get('https://pokeapi.co/api/v2/pokemon').then(
    (data) => {
        console.log(data.data.results[0]);
        res.status(200).render('index',{pokemon: data.data.results});
            }
    ).catch(
        (err) => {
            console.error(err);
                }
    ).finally(
        () => {
            console.log('termino')
        }
    );   
})

http.createServer(app).listen(8001, () => {
    console.log("iniciando por el puerto 8001");
})