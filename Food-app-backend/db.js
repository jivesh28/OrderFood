const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || ''; // Add your Mongo URI here

async function connectDB() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    const foodCollection = mongoose.connection.db.collection('food_items');
    const categoryCollection = mongoose.connection.db.collection('Categories');

    const foodItems = await foodCollection.find({}).toArray();
    const categories = await categoryCollection.find({}).toArray();

    return { foodItems, categories };
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}

module.exports = connectDB;