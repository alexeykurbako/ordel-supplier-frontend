import {ChangeDetectionStrategy, Component} from '@angular/core';
import {OrderStore} from '../../../@core/stores/order.store';
import {ProductStore} from '../../../@core/stores/product.store';
import {ClientStore} from '../../../@core/stores/client.store';

@Component({
  selector: 'ngx-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss', './order-item/order-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersListComponent {
  constructor(public orderStore: OrderStore, public clientStore: ClientStore, public productStore: ProductStore) {
  }
}
