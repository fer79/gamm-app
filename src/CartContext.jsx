import { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  getTotalCost: () => {}
});

export const CartProvider = ({children}) => {

  // TOGGLE MODAL
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  // TOGGLE MODAL

  // CART MANAGMENT
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    
      cartItems.push(item)
    
    // 
  };

  const removeFromCart = (index) => {
    cartItems.splice(index, 1);
    setShowModal(showModal);
  };

  const getCartTotal = () => {
   return cartItems.reduce((total, item) => Math.round((parseFloat(total) + parseFloat(item.price)) * 100) / 100, 0);
  };
  // CART MANAGMENT

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