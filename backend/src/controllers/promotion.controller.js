const db = require("../config/db");

exports.getPromotions = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM promotions ORDER BY created_at DESC"
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

exports.createPromotion = async (req, res) => {
  try {
    const {
      title,
      code,
      discount_type,
      discount_value,
      start_date,
      end_date,
      status,
    } = req.body;

    const result = await db.query(
      `
      INSERT INTO promotions
      (
        title,
        code,
        discount_type,
        discount_value,
        start_date,
        end_date,
        status
      )
      VALUES
      (
        $1,$2,$3,$4,$5,$6,$7
      )
      RETURNING id
      `,
      [
        title,
        code,
        discount_type,
        discount_value,
        start_date,
        end_date,
        status,
      ]
    );

    res.status(201).json({
      success: true,
      promotionId: result.rows[0].id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updatePromotion = async (req, res) => {
  try {
    const {
      title,
      code,
      discount_type,
      discount_value,
      start_date,
      end_date,
      status,
    } = req.body;

    await db.query(
      `
      UPDATE promotions
      SET
      title=$1,
      code=$2,
      discount_type=$3,
      discount_value=$4,
      start_date=$5,
      end_date=$6,
      status=$7
      WHERE id=$8
      `,
      [
        title,
        code,
        discount_type,
        discount_value,
        start_date,
        end_date,
        status,
        req.params.id,
      ]
    );

    res.json({
      success: true,
      message: "Cập nhật thành công",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.deletePromotion = async (req, res) => {
  try {
    await db.query(
      "DELETE FROM promotions WHERE id=$1",
      [req.params.id]
    );

    res.json({
      success: true,
      message: "Xóa thành công",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};