const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 5050;
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000"
}));

connectDB()
  .then(({ foodItems, categories }) => {
    global.foodData = foodItems;
    global.foodCategory = categories;
  })
  .catch(err => {
    console.error("Failed to load data from DB:", err);
  });

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});