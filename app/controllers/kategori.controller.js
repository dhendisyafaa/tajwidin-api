const db = require("../models");
const Kategori = db.kategori;

exports.findAll = (req, res) => {
  Kategori.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.show = (req, res) => {
  const id = req.params.id;

  Kategori.findById(id)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.create = (req, res) => {
  Kategori.create(req.body)
    .then(() => res.send({ message: "Data berhasil disimpan!" }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;

  Kategori.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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

  Kategori.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Tidak dapat menghapus data!" });
      }
      res.send({ message: "Data berhasil dihapus!" });
    })
    .catch((err) => res.status(505).send({ message: err.message }));
};
