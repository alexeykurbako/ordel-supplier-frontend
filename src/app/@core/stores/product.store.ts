import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product, ProductData} from '../interfaces/products';
import {shareReplay} from 'rxjs/operators';

@Injectable()
export class ProductStore {
  readonly products$: Observable<Product[]> = this.productsData.getProducts()
    .pipe(
      shareReplay(1),
    );

  constructor(private productsData: ProductData) {
  }
}
