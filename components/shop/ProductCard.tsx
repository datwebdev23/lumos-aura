import Link from "next/link";

export type Product = {
  id: number;
  name: string;
  scentNotes: string;
  price: number;
  burnTime?: string;
  category: string;
  badge?: string;
  bg: string;
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div className="shop-product-card">

        {/* Image area */}
        <div
          className="shop-product-image"
          style={{ backgroundColor: product.bg }}
        >
          {/* Candle illustration placeholder */}
          <div className="shop-product-illustration">
            <div className="shop-candle-wick" />
            <div className="shop-candle-flame" />
            <div className="shop-candle-body" />
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="shop-product-badge">
              {product.badge}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="shop-product-info">
          <h3 className="shop-product-name">{product.name}</h3>
          <p className="shop-product-scent">{product.scentNotes}</p>
          <div className="shop-product-meta">
            <span className="shop-product-price">${product.price}.00</span>
            {product.burnTime && (
              <span className="shop-product-burn">
                · {product.burnTime}
              </span>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}