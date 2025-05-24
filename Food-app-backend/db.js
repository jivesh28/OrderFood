const mongoose = require('mongoose');
const data = require('./foodData.json');

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://batjivesh:hOQer40UkOJW3t2l@master-it-db.0g2fkt0.mongodb.net/?retryWrites=true&w=majority&appName=Master-it-DB';

async function connectDB() {
  try {
    await mongoose.connect(mongoURI)

    const db = mongoose.connection.db;

    // Optional: clear existing data
    await db.collection('food_items').deleteMany({});
    await db.collection('Categories').deleteMany({});

    // Insert from local JSON data
    await db.collection('food_items').insertMany(data.food_items);
    await db.collection('Categories').insertMany(data.Categories);

    console.log("Data seeded successfully");

    const foodItems = await db.collection('food_items').find({}).toArray();
    const categories = await db.collection('Categories').find({}).toArray();

    console.log('Connected to MongoDB');

  
    return { foodItems, categories };
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}

module.exports = connectDB;