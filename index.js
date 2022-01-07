const express = require('express')
const app = express()

app.use(express.json({}));

path = require('path')
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/lanchas', (req, res)=>{
  res.render('boat/index')
})

app.get('/lancha/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    res.render('boat/boat')
  } catch (error) {
    console.log(error)
  }
});

app.post('/lancha/create', async(req, res)=>{
  const { date, time, departure, destination } = req.body
  console.log(req.body)
  res.json("a")
})


app.listen(3000, ()=>{
  console.log("O app ta rodando na porta 3000");

})
