export interface ICategory {
  id: string;
  name: string;
}

export interface IItem {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  seller_address: string; // add
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}
