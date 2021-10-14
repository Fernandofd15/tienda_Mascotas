const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/store-api', 
{
useNewUrlParser: true,
} 
);

// Habilitar body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//Habilitar cors
app.use(cors());

app.use('/', routes());

//app.get('/',function(req, res){
  //  res.send('!Este es mi primer servidor web nodeJs¡');
//})


app.listen(5000, function(){
    console.log('!servidor web Express en ejecucion¡');
})