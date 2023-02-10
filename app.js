const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./Routes/tourRoutes');
const userRouter = require('./Routes/userRoutes');

const app = express();
// console.log(app.get('env'));
// console.log(process.env);

// 3rd party middleware = morgan
app.use(morgan('dev')); // It return a normal middleware function as our own
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// GETTING ALL THE Tours

// app.get('/api/v1/tours', getAllTours);

// POSTING Tours

// app.post('/api/v1/tours', createTour);

// GETTING ONLY ONE Tour

// /:y? Optional Parameter by appending a question mark in it

// app.get('/api/v1/tours/:id', getTour);

// UPDATE THE Tours Data

// app.patch('/api/v1/tours/:id', updateTour);

// DELETE THE Tours Data

// app.delete('/api/v1/tours/:id', deleteTour);

// const tourRouter = express.Router();

app.use('/api/v1/tours', tourRouter);

// User Routes

// const userRouter = express.Router();

app.use('/api/v1/users', userRouter);

module.exports = app;
