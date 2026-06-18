const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/review.controller");

router.get("/", reviewController.getReviews);
router.get("/:id", reviewController.getReviewById);

router.post("/", reviewController.createReview);

router.delete("/:id", reviewController.deleteReview);

module.exports = router;