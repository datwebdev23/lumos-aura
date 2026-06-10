import { PRODUCT_IMAGES } from "@/lib/images";

export const PRODUCT_DETAILS = [
  {
    id: 1,
    collection: "Midnight Collection",
    name: "Midnight Cedar",
    price: 45,
    image: PRODUCT_IMAGES.midnightCedar,
    description:
      "A deep woody candle with sandalwood, amber, and vetiver. Designed for quiet evenings and warm interiors.",
    scentProfile: [
      { type: "TOP", note: "Bergamot, Cedar Leaf" },
      { type: "HEART", note: "Sandalwood, Amber" },
      { type: "BASE", note: "Vetiver, Musk" },
    ],
    details: ["10 oz / 283g", "60-hour burn time", "Soy wax blend"],
    badges: ["Bestseller", "Handcrafted", "Free Shipping"],
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    collection: "Sacred Woods",
    name: "Palo Santo Glow",
    price: 52,
    image: PRODUCT_IMAGES.paloSanto,
    description: "A cleansing ritual scent with palo santo, myrrh, and bergamot.",
    scentProfile: [
      { type: "TOP", note: "Bergamot, Citrus Peel" },
      { type: "HEART", note: "Palo Santo, Myrrh" },
      { type: "BASE", note: "Cedarwood, Smoke" },
    ],
    details: ["10 oz / 283g", "80-hour burn time", "Coconut-soy wax"],
    badges: ["Ritual Favorite", "Vegan Wax", "Free Shipping"],
    rating: 4.7,
    reviewCount: 98,
  },
  {
    id: 3,
    collection: "Fig Collection",
    name: "Wild Fig",
    price: 48,
    image: PRODUCT_IMAGES.wildFig,
    description:
      "A fresh green fig candle with galbanum, cedarwood, and soft leafy notes.",
    scentProfile: [
      { type: "TOP", note: "Fig Leaf, Green Accord" },
      { type: "HEART", note: "Galbanum, Cedarwood" },
      { type: "BASE", note: "Musk, Soft Woods" },
    ],
    details: ["10 oz / 283g", "60-hour burn time", "Soy wax blend"],
    badges: ["Fresh", "Handcrafted", "Gift Ready"],
    rating: 4.6,
    reviewCount: 72,
  },
  {
    id: 4,
    collection: "Floral Collection",
    name: "Ethereal Bloom",
    price: 48,
    image: PRODUCT_IMAGES.etherealBloom,
    description: "A soft floral candle with rose, bergamot, and patchouli.",
    scentProfile: [
      { type: "TOP", note: "Bergamot, Pink Pepper" },
      { type: "HEART", note: "Rose, Jasmine" },
      { type: "BASE", note: "Patchouli, White Musk" },
    ],
    details: ["10 oz / 283g", "60-hour burn time", "Natural wax blend"],
    badges: ["New", "Handcrafted", "Gift Ready"],
    rating: 4.9,
    reviewCount: 76,
  },
  {
    id: 5,
    collection: "Amber Collection",
    name: "Celestial Amber",
    price: 55,
    image: PRODUCT_IMAGES.celestialAmber,
    description:
      "A warm amber candle with vanilla and musk for a soft glowing atmosphere.",
    scentProfile: [
      { type: "TOP", note: "Vanilla Bean, Bergamot" },
      { type: "HEART", note: "Amber, Tonka" },
      { type: "BASE", note: "Musk, Sandalwood" },
    ],
    details: ["10 oz / 283g", "80-hour burn time", "Premium fragrance oils"],
    badges: ["Warm Scent", "Vegan Wax", "Free Shipping"],
    rating: 4.8,
    reviewCount: 141,
  },
  {
    id: 6,
    collection: "Smoke Collection",
    name: "Santal Embers",
    price: 68,
    image: PRODUCT_IMAGES.santalEmbers,
    description: "A smoky sandalwood candle with oud and soft embers.",
    scentProfile: [
      { type: "TOP", note: "Cardamom, Clove" },
      { type: "HEART", note: "Sandalwood, Smoke" },
      { type: "BASE", note: "Oud, Amber" },
    ],
    details: ["12 oz / 340g", "60-hour burn time", "Cotton wick"],
    badges: ["Deep Scent", "Handcrafted", "Limited"],
    rating: 4.6,
    reviewCount: 63,
  },
  {
    id: 7,
    collection: "Green Tea Collection",
    name: "Morning Dew",
    price: 42,
    image: PRODUCT_IMAGES.morningDew,
    description:
      "A clean morning scent with green tea, cucumber, and bright lemon.",
    scentProfile: [
      { type: "TOP", note: "Lemon, Bergamot" },
      { type: "HEART", note: "Green Tea, Cucumber" },
      { type: "BASE", note: "White Musk, Soft Woods" },
    ],
    details: ["8 oz / 226g", "40-hour burn time", "Clean wax blend"],
    badges: ["Fresh", "Light Scent", "Everyday Ritual"],
    rating: 4.7,
    reviewCount: 84,
  },
  {
    id: 8,
    collection: "Noir Floral",
    name: "Jasmine Noir",
    price: 58,
    image: PRODUCT_IMAGES.moonlitBloom,
    description:
      "A darker floral profile with jasmine, black pepper, and soft musk.",
    scentProfile: [
      { type: "TOP", note: "Black Pepper, Citrus" },
      { type: "HEART", note: "Jasmine, Iris" },
      { type: "BASE", note: "Musk, Cedar" },
    ],
    details: ["10 oz / 283g", "60-hour burn time", "Clean fragrance blend"],
    badges: ["Floral", "Gift Ready", "Free Shipping"],
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: 9,
    collection: "Spice Collection",
    name: "Spiced Tobacco",
    price: 62,
    image: PRODUCT_IMAGES.spicedTobacco,
    description:
      "A warm spiced candle with tobacco leaf, cinnamon, and clove.",
    scentProfile: [
      { type: "TOP", note: "Cinnamon, Clove" },
      { type: "HEART", note: "Tobacco Leaf, Tonka" },
      { type: "BASE", note: "Amber, Vanilla" },
    ],
    details: ["12 oz / 340g", "80-hour burn time", "Cotton wick"],
    badges: ["Warm", "Limited", "Deep Scent"],
    rating: 4.8,
    reviewCount: 112,
  },
];

export type ProductDetail = (typeof PRODUCT_DETAILS)[number];

export function getProductById(id: number) {
  return PRODUCT_DETAILS.find((product) => product.id === id);
}