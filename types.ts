export interface Sweet {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  tag?: string;
}

export interface CartItem extends Sweet {
  quantity: number;
}
