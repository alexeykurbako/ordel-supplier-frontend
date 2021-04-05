import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../../interfaces/orders';
import {HttpService} from '../common/api/http.service';

@Injectable()
export class OrdersApi {
  private readonly apiController: string = 'orders';

  constructor(private api: HttpService) {
  }

  getOrders(): Observable<Order[]> {
    return this.api.get(this.apiController);
  }

  setOrderStatus(orderId: string, status: string): Observable<Order> {
    return this.api.put(`${this.apiController}/${orderId}/status`,
      {status: status});
  }
}
