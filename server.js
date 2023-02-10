const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');
const app = require('./app');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// console.log(process.env);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
  })
  .then((con) => {
    // console.log(con.connections);
    console.log('DB connection successful');
  });

// const Tour = mongoose.model('Tour', tourSchema);

// const testTour = new Tour({
//   name: 'The Fores Hiker',
//   rating: 4.7,
//   price: 497,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('ERROR', err);
//   });

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
