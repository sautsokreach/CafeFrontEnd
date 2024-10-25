// components/DrinkList.tsx
import { Drink } from '@/type/drink';

interface DrinkListProps {
  drinks: Drink[];
  onAddToCart: (drink: Drink) => void;
}

const DrinkList: React.FC<DrinkListProps> = ({ drinks, onAddToCart }) => {
  return (
    <div>
      <h2>Available Drinks</h2>
      <ul>
        {drinks.map(drink => (
          <li key={drink.id}>
            <span>{drink.name} - ${drink.price.toFixed(2)}</span>
            <button onClick={() => onAddToCart(drink)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrinkList;
