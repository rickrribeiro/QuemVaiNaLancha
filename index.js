const express = require('express')
const app = express()

app.use(express.json({}));
// var helmet = require('helmet');
// app.use(helmet());

path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes'));

app.listen(3000, ()=>{
  console.log("O app ta rodando na porta 3000");

})
