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
    };

    Item.create(item)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Algum erro aconteceu ao tentar criar o item, Ocorreu um erro ao criar o item desejado, Por favor corrigir o seu erro para criar o seu item desejado."
        });
    });
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
            err.message || "Algum erro aconteceu ao tentar pesquisar pelos itens, Ocorreu um erro ao pesquisar os itens desejados, Por favor corrigir o seu erro para entrar a sua pesquisar desejada."
        });  
    });
};

exports.findOne = (req, res) => {
    const id = res.params.id;

    Item.findByPk(id)
    .then(data => {
        if (data) {
        res.send(data);
        } else { 
        res.status(404).send({
             message: `Não foi possível encontrar um item com o id=${id}.`
        });
        }
    })
    .catch(err => {
        res.status(508),send({
        message: "Ocorreu um erro ao tentar encontrar um item com o id=" + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Item.update(req.body, {
        where: { id: id }
    })
    .then(num => {
      if (num == 1) {
          res.send({
              message: "O item foi atualizado de maneira bem sucedida."
          });
        } else {
            res.send({
                message: `Não foi possível atualizar o item com o id=${id}.`
            });
           }
        })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao tentar atualizar um item com o id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Item.destroy({
        where: {id: id }
    })
    .then(num => {
        if (num == 1) {
            res,send({
                message: "O item foi apagado com sucesso!"
            });
        } else {
            res.send({
                message: `Não foi possível apagar o item com o id=${id}.`
            });
           }
        })
    .catch(err => {
        res.status().send({
            message: "Ocorreu um erro ao tentar apagar o item com o id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {

};

exports.findAllFlammbes = (req, res) => {

};
