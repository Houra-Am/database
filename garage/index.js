const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/garage",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database connected");
  }
);

const carsSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  created: Date,
});

const car = mongoose.model("cars", carsSchema);

/*
car.deleteMany({}).then(() => {
  car
    .create([
      {
        brand: "Renault",
        model: "Espace",
        year: 1999,
        created: new Date().getFullYear(),
      },
      {
        brand: "Renault",
        model: "Scenic",
        year: 2004,
        created: new Date().getFullYear(),
      },
      {
        brand: "Peugeot",
        model: "308",
        year: 2017,
        created: new Date().getFullYear(),
      },
    ])
    .catch((error) => console.log(error));
}); */

car
  .findById({ _id: "6046485d55b8a861e9669815" }) //
  // id is a type of object that is only recognizable in Mongoose
  // its a type ---> ObjectId
  // therefor we can specify it in find method
  //.find({ _id: "6046485d55b8a861e9669815" })//
  .then((response) => console.log(response));

car
  .updateOne(
    {
      model: "Espace",
    },
    {
      year: 2000,
    }
  )
  .then((response) => console.log(response));

car
  .deleteMany({
    brand: "Renault",
  })
  .then((response) => console.log(response));

car
  .insertMany([
    {
      brand: "Aston Martin",
      model: "DB9",
      year: 2010,
      created: new Date().getFullYear(),
    },
    {
      brand: "Range Rover",
      model: "Discovery Sport",
      year: 2017,
      created: new Date().getFullYear(),
    },
  ])
  .then((response) => console.log(response));

car
  .find({
    year: {
      $gt: 2015,
    },
  })
  .then((response) => console.log(response));

car
  .find({
    model: {
      $regex: /o/,
    },
  })
  .then((response) => console.log(response));
