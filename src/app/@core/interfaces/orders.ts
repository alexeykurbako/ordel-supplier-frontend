import {Observable} from 'rxjs';
import {Client} from './common/clients';

export interface OrderItemView {
  orderId: string;
  clientId: string;
  product: {
    id: string;
    name: string;
    details: string;
    brand: string;
    uom: string;
  };
  count: number;
  price: number;
}

export interface OrderView {
  id?: string;
  customer: Client;
  supplier: Client;
  date: Date;
  status: StatusEnum;
  totalPrice: number;
  orderItems: OrderItemView[];
}

export enum StatusEnum {
  new = 'New',
  inProgress = 'In Progress',
  done = 'Done',
}

export interface OrderItem {
  productId: string;
  count: number;
}

export interface Order {
  id?: string;
  customerId: string;
  supplierId: string;
  date: Date;
  status: StatusEnum;
  orderItems: OrderItem[];
}

export abstract class OrderData {
  abstract getOrders(): Observable<Order[]>;

  abstract setOrderStatus(orderId: string, status: string): Observable<Order>;
}
