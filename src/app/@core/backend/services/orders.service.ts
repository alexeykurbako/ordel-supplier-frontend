import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Order, OrderData} from '../../interfaces/orders';
import {OrdersApi} from '../api/orders.api';

@Injectable()
export class OrdersService extends OrderData {

  constructor(private api: OrdersApi) {
    super();
  }

  getOrders(): Observable<Order[]> {
    return this.api.getOrders();
  }

  setOrderStatus(orderId: string, status: string): Observable<Order> {
    return this.api.setOrderStatus(orderId, status);
  }
}
