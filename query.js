const { Op, Sequelize, QueryTypes, col, fn, literal } = require("sequelize");
const { now } = require("sequelize/dist/lib/utils");
const sequelize = new Sequelize(require("./app/config/db"));

const { Boat, Room, Person } = require('./app/models')

async function getAllBoats() {
    return await Boat.findAll({
        order: [["departure", "ASC"]],
    });
}

async function createBoat(date, departure, destination){
    return await Boat.create({
        date,
        departure,
        destination
    })
}

async function getUpcomingBoats() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    
    return await Boat.findAll({
        where:{
            date:{
               [Op.gte]: date
            }
        },
        order: [["departure", "ASC"]],
    });

}

async function getBoatById(id) {
    return await Boat.findOne({
        where: {
            id
        }
    });
}

module.exports = {
    getAllBoats,
    createBoat,
    getUpcomingBoats,
    getBoatById
}