const express = require('express')
const app = express()

app.use(express.json({}));

path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
  //getMessage("quickstart", io);
  res.render('index')
})

app.get('/lancha', (req, res)=>{
  //getMessage("quickstart", io);
  res.render('boat')
})

app.post('/teste', async(req, res)=>{
  res.json("a")
})


app.listen(3000, ()=>{
  console.log("O bot ta rodando na porta 3000");

})
