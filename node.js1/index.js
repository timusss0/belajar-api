const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection')
     
app.use(bodyParser.json())

app.get('/', (req, res) => {
  db.query("SELECT * FROM mahasiswa", (error, result) => {
    //hasil data dari mysql
    console.log(result);
  })
  res.send('utama')
});

app.get('/halo', (request, res) => {
  res.send('selamat malam')
});
 
app.post('/login', (req, res) => {
  console.log({requestFromOutside: req.body})
  res.send('login berhasil')
});

app.put('/username', (req,res) => {
  console.log({updateData: req.body})
  res.send('update berhasil')
});

//untuk meng run si express di balik layar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});








// routes / URL / endpoint utama kita method GET   ///make arrow fuction  //request  dan respon adalah call back
//req : apapun yang di klik dari postman masuk jadi req
//res : apapun yang di keluarkan oleh sistem
//di postman = untuk fitur kayak register , login biasanya pakek raw dan text nya JSON
//post : ad kayak login , registrasi ,form ketika masukin password sama username itu pas di klik submit mengarah ke method post supaya data yang id kirimkan tidak muncul di URL
//json = JavaScript Object Notation