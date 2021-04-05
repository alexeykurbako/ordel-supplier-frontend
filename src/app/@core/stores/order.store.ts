import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Order, OrderData, OrderView} from '../interfaces/orders';
import {Client} from '../interfaces/common/clients';
import {Product} from '../interfaces/products';
import {map} from 'rxjs/operators';
import {ClientStore} from './client.store';
import {ProductStore} from './product.store';
import {mapOrderToOrderView} from '../utils/mapFunctions';
import {NbToastrService} from '@nebular/theme';

@Injectable()
export class OrderStore {
  readonly orders$: Observable<OrderView[]> =
    combineLatest<Observable<Order[]>, Observable<Client[]>, Observable<Product[]>>([
      this.ordersData.getOrders(),
      this.clientStore.clients$,
      this.productStore.products$,
    ]).pipe(
      map(
        ([orders, clients, products]: [Order[], Client[], Product[]]) =>
          mapOrderToOrderView(orders, clients, products),
      ),
    );

  constructor(private ordersData: OrderData, private clientStore: ClientStore, private productStore: ProductStore,
              private toastrService: NbToastrService) {
  }

  changeOrderStatus(orderId: string, status: string) {
    this.ordersData.setOrderStatus(orderId, status).subscribe((order) => {
      if (order.status === status) {
        this.toastrService.success('', `Order status changed to ${status}.`);
      }
    });
  }
}
