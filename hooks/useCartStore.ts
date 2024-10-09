import { OrderItem } from "@/models/Order";
import { ShippingAddress } from "@/models/ShippingAddress";
import { create } from "zustand";

type Cart = {
  cartItems: OrderItem[];
  totalCount: number;
  totalPrice: number;
  shippingAddress: ShippingAddress;
};

const initialState: Cart = {
  cartItems: [],
  totalCount: 0,
  totalPrice: 0,
  shippingAddress: { city: "", country: "", postalCode: "", address: "" },
};

export const cartStore = create<Cart>(() => initialState);

export default function useCartService() {
  const { cartItems, totalCount, totalPrice, shippingAddress } = cartStore();
  return {
    cartItems,
    totalCount,
    totalPrice,
    shippingAddress,
    increase: (item: OrderItem) => {
      const exist = cartItems.find((c) => c._id === item._id);

      const updatedCartItems = exist
        ? cartItems.map((c) =>
            c._id === item._id ? { ...exist, qty: exist.qty + 1 } : c
          )
        : [...cartItems, { ...item, qty: 1, product: item._id }];

      const { totalCount, totalPrice } = updateCartInfo(updatedCartItems);

      cartStore.setState({
        cartItems: updatedCartItems,
        totalCount,
        totalPrice,
      });
    },

    decrease: (item: OrderItem) => {
      const exist = cartItems.find((c) => c._id === item._id);
      if (!exist) return;

      const updatedCartItems =
        exist.qty === 1
          ? cartItems.filter((c) => c._id !== item._id)
          : cartItems.map((c) =>
              c._id === item._id ? { ...exist, qty: exist.qty - 1 } : c
            );
      const { totalCount, totalPrice } = updateCartInfo(updatedCartItems);
      cartStore.setState({
        cartItems: updatedCartItems,
        totalCount,
        totalPrice,
      });
    },
    clear: () => {
      cartStore.setState({ cartItems: [], totalCount: 0, totalPrice: 0 });
    },
    setShippingAddress: (shippingAddress: ShippingAddress) => {
      console.log(shippingAddress);
      cartStore.setState({ shippingAddress });
    },
  };
}

const updateCartInfo = (cartItems: OrderItem[]) => {
  const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * Number(item.price),
    0
  );
  return { totalCount, totalPrice };
};
