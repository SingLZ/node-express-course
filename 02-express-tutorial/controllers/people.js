const {people} = require("../data");

const addPerson = (req, res) => {
    if (req.body.name) {
        people.push({id: people.length + 1, name: req.body.name});
        return res.status(201).json({success: true, name: req.body.name});
    } else {
        res.status(400).json({success: false, message: "Please provide a name"});
    }
}

const getPeople = (req, res) => {
    res.json({people});
}

const getPerson = (req, res) => {
    const idToFind = parseInt(req.params.id); // req.params will give us the route parameters
    const person = people.find((person) => person.id === idToFind); // Find the product by ID
    if (!person) {
        return res.status(404).json({message: `That person was not found.`}); // If product not found, send 404
    }
    res.status(200).json({person}); // Send the product as a response
}

const updateName = (req, res) => {
    const {id, name} = req.body;
    const person = people.find((person) => person.id === parseInt(id));
    person.name = name;
    res.status(200).json({person});
    if (!person) {
        return res.status(404).json({message: `That person was not found.`})
}
}

const deletePerson = (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const personIndex = people.findIndex((person) => person.id === idToDelete);
    if (personIndex === -1) {
        return res.status(404).json({message: `That person was not found.`});
    }
    people.splice(personIndex, 1);
    res.status(200).json({message: `Person with ID ${idToDelete} deleted successfully.`});
}
module.exports = {
    getPeople,
    addPerson,
    getPerson,
    updateName,
    deletePerson
}