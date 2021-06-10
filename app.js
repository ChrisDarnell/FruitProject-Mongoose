//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// New Collection - Fruits

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Fruit Entries for Testing

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 6,
//   review: "Pretty decent!"
// });

// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: 4,
//   review: "Not on pizza."
// });

// const grapefruit = new Fruit({
//   name: "Grapefruit",
//   rating: 9,
//   review: "Excellent!"
// });

// const pear = new Fruit({
//   name: "Pear",
//   rating: 5,
//   review: "Dry."
// });

// New Collection - People

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// Person Entry for Testing

// const person = new Person({
//   name: "Johnny",
//   age: 36
// });


// const person = new Person({
//    name: "Mary",
//    age: 22,
//    favoriteFruit: pineapple
//  });


// Insert

// Insert Single for Testing

// fruit.save();
// person.save();


// Insert Many for Testing

// Fruit.insertMany([pineapple, grapefruit, pear], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success!");
//   }
// });


// Find Documents

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  }
});

// Update Documents  - Fill in id to Update name to entered value

// Fruit.updateOne({
//   _id: ""
// }, {
//   name: ""
// }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful Update");
//   }
// });

// Delete Single Document from Fruits - Fill in name to Delete

// Fruit.deleteOne({
//   name: ""
// }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful Delete");
//   }
// });

// Delete Many from People - Fill in Name to Delete

// Person.deleteMany({name: ""}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successful Delete of all Matches");
//   }
// });