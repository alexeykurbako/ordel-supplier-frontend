import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product, ProductData} from '../../interfaces/products';
import {ProductsApi} from '../api/products.api';

@Injectable()
export class ProductsService extends ProductData {

  constructor(private api: ProductsApi) {
    super();
  }

  getProducts(): Observable<Product[]> {
    return this.api.getProducts();
  }

  create(product: any): Observable<Product> {
    return this.api.add(product);
  }

  update(product: any): Observable<Product> {
    return this.api.update(product);
  }
}
