const db = require("../config/db");
const slugify = require("slugify");

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 8,
      search = "",
      category,
      minPrice,
      maxPrice,
      sort = "newest",
    } = req.query;

    const offset = (Number(page) - 1) * Number(limit);

    let sql = `
      SELECT p.*, c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.status = 'active'
    `;

    const params = [];
    let paramIndex = 1;

    if (search) {
      sql += `
        AND (
          p.name ILIKE $${paramIndex}
          OR p.description ILIKE $${paramIndex}
          OR p.scent ILIKE $${paramIndex}
        )
      `;
      params.push(`%${search}%`);
      paramIndex++;
    }

    if (category) {
      sql += ` AND p.category_id = $${paramIndex}`;
      params.push(category);
      paramIndex++;
    }

    if (minPrice) {
      sql += ` AND p.price >= $${paramIndex}`;
      params.push(minPrice);
      paramIndex++;
    }

    if (maxPrice) {
      sql += ` AND p.price <= $${paramIndex}`;
      params.push(maxPrice);
      paramIndex++;
    }

    if (sort === "price_asc") {
      sql += ` ORDER BY p.price ASC`;
    } else if (sort === "price_desc") {
      sql += ` ORDER BY p.price DESC`;
    } else {
      sql += ` ORDER BY p.created_at DESC`;
    }

    sql += ` LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(Number(limit), Number(offset));

    const result = await db.query(sql, params);

    res.json({
      success: true,
      page: Number(page),
      limit: Number(limit),
      data: result.rows,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Lỗi lấy danh sách sản phẩm",
      error: error.message,
    });
  }
};

// GET PRODUCT BY ID
exports.getProductById = async (req, res) => {
  try {
    const result = await db.query(
      `
      SELECT p.*, c.name AS category_name
      FROM products p
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.id = $1
      `,
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Không tìm thấy sản phẩm",
      });
    }

    res.json({
      success: true,
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Lỗi lấy chi tiết sản phẩm",
      error: error.message,
    });
  }
};

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const {
      category_id,
      name,
      description,
      scent,
      size,
      burn_time,
      price,
      old_price,
      stock,
    } = req.body;

    const slug = slugify(name, {
      lower: true,
      strict: true,
      locale: "vi",
    });

    const image_url = req.file
      ? `/uploads/${req.file.filename}`
      : null;

    const result = await db.query(
      `
      INSERT INTO products
      (
        category_id,
        name,
        slug,
        description,
        scent,
        size,
        burn_time,
        price,
        old_price,
        stock,
        image_url
      )
      VALUES
      (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
      )
      RETURNING id
      `,
      [
        category_id,
        name,
        slug,
        description,
        scent,
        size,
        burn_time,
        price,
        old_price,
        stock,
        image_url,
      ]
    );

    res.status(201).json({
      success: true,
      message: "Tạo sản phẩm thành công",
      productId: result.rows[0].id,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Lỗi tạo sản phẩm",
      error: error.message,
    });
  }
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const {
      category_id,
      name,
      description,
      scent,
      size,
      burn_time,
      price,
      old_price,
      stock,
      status,
    } = req.body;

    const image_url = req.file
      ? `/uploads/${req.file.filename}`
      : req.body.image_url;

    await db.query(
      `
      UPDATE products
      SET
        category_id = $1,
        name = $2,
        description = $3,
        scent = $4,
        size = $5,
        burn_time = $6,
        price = $7,
        old_price = $8,
        stock = $9,
        image_url = $10,
        status = $11
      WHERE id = $12
      `,
      [
        category_id,
        name,
        description,
        scent,
        size,
        burn_time,
        price,
        old_price,
        stock,
        image_url,
        status || "active",
        req.params.id,
      ]
    );

    res.json({
      success: true,
      message: "Cập nhật sản phẩm thành công",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Lỗi cập nhật sản phẩm",
      error: error.message,
    });
  }
};

// DELETE PRODUCT (SOFT DELETE)
exports.deleteProduct = async (req, res) => {
  try {
    await db.query(
      `
      UPDATE products
      SET status = 'inactive'
      WHERE id = $1
      `,
      [req.params.id]
    );

    res.json({
      success: true,
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Lỗi xóa sản phẩm",
      error: error.message,
    });
  }
};