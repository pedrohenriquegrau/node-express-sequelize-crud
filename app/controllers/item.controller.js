const db = require("../models");
const Item = db.Items;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (req.body.name) {
        res.status(400).send({
            message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const item = {
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        is_flammble: req.body.is_flammble ? req.body.is_flammble: false
    }

    Item.create(item)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Ocorreu um erro ao criar o item."
        })
    })
    };

exports.findAll = (req, res) => {
    const name = req.body.name;
    var condition = name ? {name: { [op.like]: `%${name}%` } } : null;

    items.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Ocorreu um erro ao listar os itens."
        })
        
    })
};

    exports.findOne = (req, res) => {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllFlammbes = (req, res) => {

};
