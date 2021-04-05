import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderView, StatusEnum} from '../../@core/interfaces/orders';

@Component({
  selector: 'ngx-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderDetailsComponent {
  @Input() order: OrderView;
  @Output() orderStatusChanged = new EventEmitter<string>();

  statusEnum = StatusEnum;
}
