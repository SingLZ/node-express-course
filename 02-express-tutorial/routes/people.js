const express = require("express");
const router = express.Router();
const { addPerson, getPeople, getPerson, updateName, deletePerson} = require("../controllers/people.js");

 router.get('/', (req, res) => {
    getPeople(req, res);
 })

 router.post('/', (req, res) => {
    addPerson(req, res);
})

router.get('/:id', (req, res) => {
    getPerson(req, res);
})

router.put('/', (req, res) => {
    updateName(req, res);
})

router.delete('/:id', (req, res) => {
    deletePerson(req, res);
})

module.exports= router;