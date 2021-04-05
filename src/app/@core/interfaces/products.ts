import {Observable} from 'rxjs';

export interface OrderProductView {
  productId: string;
  clientId: string;
  count: number;
}

export interface ClientProduct {
  clientId: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  details: string;
  brand: string;
  uom: string;
  imageUrl: string;
  clientProducts: ClientProduct[];
}

export abstract class ProductData {
  abstract getProducts(): Observable<Product[]>;
}
