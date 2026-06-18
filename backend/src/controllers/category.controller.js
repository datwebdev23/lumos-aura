const db = require("../config/db");
const slugify = require("slugify");

exports.getCategories = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM categories ORDER BY id DESC"
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

exports.getCategoryById = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM categories WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy category",
      });
    }

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

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const slug = slugify(name, {
      lower: true,
      strict: true,
      locale: "vi",
    });

    const result = await db.query(
      `
      INSERT INTO categories(name, slug, description)
      VALUES($1,$2,$3)
      RETURNING id
      `,
      [name, slug, description]
    );

    res.status(201).json({
      success: true,
      categoryId: result.rows[0].id,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const slug = slugify(name, {
      lower: true,
      strict: true,
      locale: "vi",
    });

    await db.query(
      `
      UPDATE categories
      SET name=$1, slug=$2, description=$3
      WHERE id=$4
      `,
      [name, slug, description, req.params.id]
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

exports.deleteCategory = async (req, res) => {
  try {
    await db.query(
      "DELETE FROM categories WHERE id=$1",
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