import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import { getProductById } from "@/lib/product-detail";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    return {
      title: "Product Not Found — Lumos Aura",
    };
  }

  return {
    title: `${product.name} — Lumos Aura`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(Number(id));

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}