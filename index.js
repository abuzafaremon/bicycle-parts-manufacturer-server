const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('<h1>Hello From Bicycle Parts Manufacturer!</h1>')
})

app.listen(port, () => {
  console.log(`Bicycle Parts Manufacturer listening on port ${port}`)
})