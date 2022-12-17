import React, { createContext, useState, useEffect } from "react";
//create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([]);

  //item total
  const [total, setTotal] = useState(0);
 
  
  
  //item ammount in cart
  const [itemAmmount, setitemAmmount] =useState(0)

useEffect(() => {
  if(cart){
    const amount = cart.reduce((prevValue,currentValue) => {
      return prevValue+currentValue.amount
    },0)
    setitemAmmount(amount)
  }
},[cart])

//total price state
useEffect(() => {
  const total= cart.reduce((prevValue , currentValue) => {
    return prevValue+currentValue.amount*currentValue.price
  },0)
setTotal(total)
})

  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    //if check item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    //if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  
  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clearCart
  const clearCart = () => {
    setCart([]);
  };

  //increase number
  const increaseCartItem = (id) => {
    const CartItem = cart.find((item) => item.id === id
    );
    addToCart(CartItem,id);
  };

   // decrease amount
   const decreaseNumber = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increaseCartItem,decreaseNumber,itemAmmount,total}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
