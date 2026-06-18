const db = require("../config/db");

exports.getFeedbacks = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM feedbacks ORDER BY created_at DESC"
    );

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

exports.createFeedback = async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      message,
    } = req.body;

    const result = await db.query(
      `
      INSERT INTO feedbacks
      (
        full_name,
        email,
        phone,
        message,
        status
      )
      VALUES
      (
        $1,$2,$3,$4,'pending'
      )
      RETURNING id
      `,
      [full_name, email, phone, message]
    );

    res.status(201).json({
      success: true,
      feedbackId: result.rows[0].id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateFeedbackStatus = async (req, res) => {
  try {
    const { status } = req.body;

    await db.query(
      `
      UPDATE feedbacks
      SET status=$1
      WHERE id=$2
      `,
      [status, req.params.id]
    );

    res.json({
      success: true,
      message: "Đã cập nhật trạng thái",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    await db.query(
      "DELETE FROM feedbacks WHERE id=$1",
      [req.params.id]
    );

    res.json({
      success: true,
      message: "Xóa feedback thành công",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};