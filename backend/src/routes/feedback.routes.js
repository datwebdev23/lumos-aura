const express = require("express");
const router = express.Router();

const feedbackController = require("../controllers/feedback.controller");

router.get("/", feedbackController.getFeedbacks);
router.post("/", feedbackController.createFeedback);
router.put("/:id", feedbackController.updateFeedbackStatus);
router.delete("/:id", feedbackController.deleteFeedback);

module.exports = router;