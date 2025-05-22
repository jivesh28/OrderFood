const express = require('express');
const connectDB = require('./db');
const app = express();
const port = 5000;

connectDB()
  .then(({ foodItems, categories }) => {
    global.foodData = foodItems;
    global.foodCategory = categories;
  })
  .catch(err => {
    console.error("Failed to load data from DB:", err);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});