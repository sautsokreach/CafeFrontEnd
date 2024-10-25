// components/Cart.tsx
import { Drink } from '@/type/drink';

interface CartProps {
  cartItems: Drink[];
  onRemoveFromCart: (id: number) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart, onCheckout }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <span>{item.name} - ${item.price.toFixed(2)}</span>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
