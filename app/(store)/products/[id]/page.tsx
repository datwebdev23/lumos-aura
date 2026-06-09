import ProductDetailPage from "@/components/product/ProductDetailClient";
import { PRODUCT_DETAILS } from "@/lib/product-detail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  const product =
  PRODUCT_DETAILS.find((item: (typeof PRODUCT_DETAILS)[number]) => item.id === productId) ??
  PRODUCT_DETAILS[0];

  return <ProductDetailPage product={product} />;
}