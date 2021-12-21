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

app.get('/lancha/:id', async (req, res, next) => {
  const {id} = req.params;
  try {
    //const member = await getFactionMemberFromId(id);

    //if (!member) throw Error(`Membro não existe`);


    //const memberPhotos = await getAllFactionMemberPhotos(id);

    //return res.render('backend/factions/members/photos', {member, memberPhotos});
    res.render('boat')
  } catch (error) {
    //logger.error(error);
    //return generalException(req, res, `/factions/members/${id}/photos`, error.message);
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
