module.exports = (app) => {
  const hukum = require("../controllers/hukum.controller");
  const router = require("express").Router();

  router.get("/", hukum.findAll);
  router.get("/:id", hukum.show);
  router.post("/", hukum.create);
  router.put("/:id", hukum.update);
  router.delete("/:id", hukum.delete);

  app.use("/hukum", router);
};
