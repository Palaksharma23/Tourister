const express = require('express');
const reviewController = require('./../controllers/reviewController');
const authController = require('./../controllers/authController');

const router = express.Router({
  mergeParams: true,
});

// POST /tour/tour_id/reviews
// GET /tour/tour_id/reviews
// POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

router.route('/:id').delete(
  // authController.restrictTo('user', 'admin'),
  reviewController.deleteReview
);

module.exports = router;
