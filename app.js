require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servicio contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Celesthe Sazo',
    titulo: 'Curso node'
  });

});

// app.get('/', function (req, res) {
//   res.send('home page')
// });

app.get('/Hola-Mundo', function (req, res) {
  res.send('Hello World en su respectiva ruta')
});
/*
 app.get('/generic', function (req, res) {
    res.sendFile( __dirname + '/public/generic.html')
  });
  */

  app.get('/generic', function (req, res) {
    res.render('generic', {
      titulo: 'Curso node'
    });
  
  });

  app.get('/elements', function (req, res) {
    res.render('elements', {
      titulo: 'Curso node'
    });
  
  });
  /*
app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
  });
  */
 
app.listen(port)