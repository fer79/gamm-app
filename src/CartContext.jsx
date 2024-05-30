import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({children}) => {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    cartItems.push(item);
  };

  const removeFromCart = (index) => {
    cartItems.splice(index, 1);
    getCartTotal();alert(1);
  };

  const getCartTotal = () => {
   return cartItems.reduce((total, item) => Math.round((parseFloat(total) + parseFloat(item.price)) * 100) / 100, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        getCartTotal,
        showModal,
        setShowModal,
        toggleModal,
        removeFromCart,
      }}>{children}</CartContext.Provider>
  );
};

export default CartContext;