"use client"
import { useState } from 'react';
import { Drink, drinks } from '@/type/drink';
import DrinkList from '@/app/pos/components/DrinkList';
import Cart from '@/app/pos/components/Card';
import Checkout from '@/app/pos/components/Checkout';

const Home: React.FC = () => {
  const [cartItems, setCartItems] = useState<Drink[]>([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const addToCart = (drink :any) => {
    setCartItems([...cartItems, drink]);
  };

  const removeFromCart = (id :any) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCheckingOut(!isCheckingOut);
  };

  return (
    <div>
      <h1>Drink POS System</h1>
      {isCheckingOut ? (
        <Checkout onCheckout={handleCheckout} />
      ) : (
        <>
          <DrinkList drinks={drinks} onAddToCart={addToCart} />
          <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} onCheckout={handleCheckout} />
        </>
      )}
    </div>
  );
};

export default Home;
