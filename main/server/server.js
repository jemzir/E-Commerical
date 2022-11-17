const path = require('path');
const express = require('express');
const app = express();
const router = require('./routes/api.js');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true} ));

app.use(express.static(path.resolve(__dirname, '.././client')))

// app.use('/build', express.static(path.resolve(__dirname, '../../build')));
// app.get('/', (req, res) => {
//   return res.status(200).sendFile('.././client/index.html');
// })

app.use('/api', router);

// a route handler for any req that do not exist
app.use((req, res) => res.status(400).json('This page doesn\'t exist fellow business person!'));

//Error catch all, we know this because 4 parameters...
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// for when the server starts will know
app.listen(PORT, () => {
  console.log(`Server listening in on port: ${PORT}...`);
});

// just in case I will be using this somewhere else...
module.exports = app 