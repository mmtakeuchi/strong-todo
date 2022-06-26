const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const todoRoutes = require('./routes/todo');

const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, './client/build')));
app.get('/', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.use('/api', todoRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
