// components/Checkout.tsx
import { useState } from 'react';

interface CheckoutProps {
  onCheckout: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onCheckout }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally, here you would handle the checkout process (e.g., API call)
    console.log('Order placed for:', { name, address });
    onCheckout();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default Checkout;
