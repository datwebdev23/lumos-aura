export type CartItem = {
  id: number;
  collection: string;
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
  image?: string;
  bg?: string;
};

const CART_KEY = "lumos-cart";

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCartItems(items: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("lumos-cart-updated"));
}

export function getCartCount() {
  return getCartItems().reduce((sum, item) => sum + item.quantity, 0);
}

export function addCartItem(item: CartItem) {
  const items = getCartItems();
  const existing = items.find((i) => i.id === item.id);

  const nextItems = existing
    ? items.map((i) =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + item.quantity }
          : i
      )
    : [...items, item];

  saveCartItems(nextItems);
}

export function updateCartQuantity(id: number, quantity: number) {
  const items = getCartItems().map((item) =>
    item.id === id ? { ...item, quantity } : item
  );

  saveCartItems(items);
}

export function removeCartItem(id: number) {
  saveCartItems(getCartItems().filter((item) => item.id !== id));
}