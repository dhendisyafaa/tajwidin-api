module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      name: String,
      pengertian: String,
      jumlah_huruf: Number,
      huruf: String,
      cara_membaca: String,
      jenis: [],
    },
    {
      timestamps: true,
    }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  return mongoose.model("hukum", schema);
};
