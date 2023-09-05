module.exports = app => {
    const items = require("../controllers/item.controller.js");

    var router = require("express").Router();

    router.post("/", items.create);

    router.get("/", items.findAll);

    router.get("/flammbers", items.findAllPublished);

    router.get("/:id", items.findOne);

    router.put("/:id", items.update);

    router.delete("/:id", items.delete);

    router.delete("/", items.deleteAll);

    router.use('/api/items', router);
};