const express = require("express");
const cors = require("cors");
const path = require("path");

const productRoutes = require("./routes/product.routes");
const categoryRoutes = require("./routes/category.routes");
const reviewRoutes = require("./routes/review.routes");
const promotionRoutes = require("./routes/promotion.routes");
const feedbackRoutes = require("./routes/feedback.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

console.log("productRoutes:", productRoutes);
console.log("categoryRoutes:", categoryRoutes);
console.log("reviewRoutes:", reviewRoutes);
console.log("promotionRoutes:", promotionRoutes);
console.log("feedbackRoutes:", feedbackRoutes);

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/promotions", promotionRoutes);
app.use("/api/feedbacks", feedbackRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Lumos Aura Backend API is running" });
});

module.exports = app;