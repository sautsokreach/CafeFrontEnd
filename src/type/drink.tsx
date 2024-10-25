// data/drinks.ts
export interface Drink {
    id: number;
    name: string;
    price: number;
  }
  
  export const drinks: Drink[] = [
    { id: 1, name: "Coke", price: 1.5 },
    { id: 2, name: "Pepsi", price: 1.5 },
    { id: 3, name: "Lemonade", price: 2.0 },
    { id: 4, name: "Iced Tea", price: 2.5 },
    { id: 5, name: "Water", price: 1.0 },
  ];
  