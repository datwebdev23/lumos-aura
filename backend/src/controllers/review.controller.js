const db = require("../config/db");

exports.getReviews = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT r.*, p.name AS product_name
      FROM reviews r
      LEFT JOIN products p ON r.product_id = p.id
      ORDER BY r.created_at DESC
    `);

    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getReviewById = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM reviews WHERE id = $1",
      [req.params.id]
    );

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.createReview = async (req, res) => {
  try {
    const { product_id, customer_name, rating, comment } = req.body;

    const result = await db.query(
      `
      INSERT INTO reviews
      (product_id, customer_name, rating, comment)
      VALUES ($1,$2,$3,$4)
      RETURNING id
      `,
      [product_id, customer_name, rating, comment]
    );

    res.status(201).json({
      success: true,
      reviewId: result.rows[0].id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await db.query(
      "DELETE FROM reviews WHERE id = $1",
      [req.params.id]
    );

    res.json({
      success: true,
      message: "Xóa review thành công",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};