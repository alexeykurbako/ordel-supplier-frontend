import {Observable} from 'rxjs';

export interface OrderProductView {
  productId: string;
  clientId: string;
  count: number;
}

export interface ClientProduct {
  id: string;
  clientId: string;
  price: number;
  count: number;
}

export interface Product {
  id: string;
  name: string;
  details: string;
  brand: string;
  uom: string;
  image: string;
  clientProducts: ClientProduct[];
}

export abstract class ProductData {
  abstract getProducts(): Observable<Product[]>;
  abstract update(product: Product): Observable<Product>;
  abstract create(product: Product): Observable<Product>;
}
