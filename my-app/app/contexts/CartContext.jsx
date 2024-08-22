import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addItemToCart = (item) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    updateTotalCost();
  };

  const removeItemFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
    updateTotalCost();
  };

  const updateItemQuantity = (item, quantity) => {
    setCart(
      cart.map((i) =>
        i.id === item.id ? { ...i, quantity: quantity } : i
      )
    );
    updateTotalCost();
  };

  const clearCart = () => {
    setCart([]);
    setTotalCost(0);
  };

  const updateTotalCost = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalCost(total);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };