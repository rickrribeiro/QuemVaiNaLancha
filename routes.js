//All in a file because there are only few routes
const express = require('express');
const router = express.Router();

const { getAllBoats,getUpcomingBoats, createBoat, getBoatById } = require('./query')

router.get('/', async (req, res) => {
    res.render('index', { owner: process.env.OWNER })
})

router.get('/lanchas', async (req, res) => {
    const boats = await getUpcomingBoats()
    const boat = await getAllBoats()
    //console.log(boat)
    console.log(boats)
    res.render('boat/index', { owner: process.env.OWNER, boats })
})

router.get('/lanchas/historico', async (req, res) => {
    const boats = await getAllBoats()
    res.render('boat/history', { owner: process.env.OWNER, boats })
})

router.get('/lancha/:id', async (req, res) => {
    const { id } = req.params;
    console.log("lancha: " + id)
    const boat = await getBoatById(id)
    try {
        res.render('boat/boat', { owner: process.env.OWNER, boat })
    } catch (error) {
        console.log(error)
    }
});

router.post('/lancha/create', async (req, res) => {
    const { date, time, departure, destination } = req.body
    console.log(req.body)
    const boat = await createBoat(date, departure, destination)
    res.json("a")
})


router.get('/quartos', async (req, res) => {
    res.render('room/index', { owner: process.env.OWNER })
})


router.get('/quarto/:id', async (req, res) => {
    const { id } = req.params;
    console.log("quarto: " + id)
    try {
        res.render('room/room', { owner: process.env.OWNER })
    } catch (error) {
        console.log(error)
    }
});

router.get('*', async (req, res, next) => res.status(404).render('errors/404'));

module.exports = router;