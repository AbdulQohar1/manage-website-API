require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();

// errorHandler Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// extra packages
app.use(express.json());
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// const routes = require('./routes/products');


// connectDB
const connectDB = require('./db/connect');


// routes 
app.get('/', (req, res) => {
  res.send('manage api')
});



const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    app.listen( port, () =>
      console.log(`Listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();