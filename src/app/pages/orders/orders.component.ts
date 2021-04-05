import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProductStore} from '../../@core/stores/product.store';

@Component({
  selector: 'ngx-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {

  constructor() {
  }

  openOrder(id: number) {

  }
}
