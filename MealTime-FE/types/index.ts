export interface Restaurant {
  id: string;
  name: string;
  description?: string;
  cuisine: string;
  address: string;
  rating: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  available: boolean;
}

export interface Order {
  id: string;
  restaurantId: string;
  items: OrderItem[];
  totalAmount: number;
  status: string;
}

export interface OrderItem {
  menuItemId: string;
  quantity: number;
  price: number;
}
