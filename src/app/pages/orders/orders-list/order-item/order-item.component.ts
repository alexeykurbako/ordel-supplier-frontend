import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {OrderView} from '../../../../@core/interfaces/orders';

@Component({
  selector: 'ngx-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderItemComponent {
  @Input() order: OrderView;

  transformNumber(number: number) {
    const dec = number.toString().split('.')[1];
    const transformedNumber = Number(number);
    return !dec || dec.length !== 2 ? transformedNumber.toFixed(2) : transformedNumber;
  }
}
