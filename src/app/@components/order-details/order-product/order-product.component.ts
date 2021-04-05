import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderItemView} from '../../../@core/interfaces/orders';
import {OrderProductView} from '../../../@core/interfaces/products';

@Component({
  selector: 'ngx-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderProductComponent {
  @Input() orderItem: OrderItemView;
}
