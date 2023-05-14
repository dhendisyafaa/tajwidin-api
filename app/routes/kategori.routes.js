module.exports = (app) => {
  const kategori = require("../controllers/kategori.controller");
  const router = require("express").Router();

  router.get("/", kategori.findAll);
  router.get("/:id", kategori.show);
  router.post("/", kategori.create);
  router.put("/:id", kategori.update);
  router.delete("/:id", kategori.delete);

  app.use("/kategori", router);
};
