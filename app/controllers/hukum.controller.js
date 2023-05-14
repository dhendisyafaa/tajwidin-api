const db = require("../models");
const Hukum = db.hukum;

exports.findAll = (req, res) => {
  Hukum.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.show = (req, res) => {
  const id = req.params.id;

  Hukum.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.create = (req, res) => {
  Hukum.create(req.body)
    .then(() => res.send({ message: "Data berhasil disimpan!" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;

  Hukum.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Tidak dapat mengupdate data!" });
      }
      res.send({ message: "Data berhasil diupdate!" });
    })
    .catch((err) => res.status(505).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Hukum.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Tidak dapat menghapus data!" });
      }
      res.send({ message: "Data berhasil dihapus!" });
    })
    .catch((err) => res.status(505).send({ message: err.message }));
};
