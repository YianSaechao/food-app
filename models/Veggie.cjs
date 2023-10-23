const mongoose = require('mongoose');

// create schema (breakdown of what our data should look like)
const veggieSchema = new mongoose.Schema(
    {
        name: String,
        color: String,
        readyToEat: Boolean,
        age: Number,
        isHealthy: Boolean
    },
    {
        timestamps: true
    }
    )

// create Model with that schema
// whatever we put as the collection name will be lowecased and pluralized +s
// Fruit > fruits
// User > users
// Veggies > veggies

const Veggie = mongoose.model("Veggies",         veggieSchema);
//                          1. ^ which collection   2. ^ the schema

module.exports = Veggie;