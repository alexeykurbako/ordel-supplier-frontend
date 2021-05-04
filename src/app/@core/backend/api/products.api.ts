import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpService} from '../common/api/http.service';
import {Product} from '../../interfaces/products';

@Injectable()
export class ProductsApi {
  private readonly apiController: string = 'products';

  constructor(private api: HttpService) {
  }

  getProducts(): Observable<Product[]> {
    return this.api.get(this.apiController);
  }

  add(item: any): Observable<any> {
    return this.api.post(this.apiController, item);
  }

  update(item: any): Observable<any> {
    return this.api.put(this.apiController, item);
  }
}
