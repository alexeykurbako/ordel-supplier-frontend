import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {OrderView} from '../../../@core/interfaces/orders';
import {map, switchMap} from 'rxjs/operators';
import {OrderStore} from '../../../@core/stores/order.store';

@Component({
  selector: 'ngx-order',
  template: `
    <ng-container *ngIf="order$ | async as order">
      <ngx-order-details [order]="order"
                         (orderStatusChanged)="orderStore.changeOrderStatus(order.id, $event)">
      </ngx-order-details>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  order$: Observable<OrderView> = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.orderStore.orders$.pipe(
        map(orders => {
          return orders.find(order => order.id === params.get('id'));
        }),
      ),
    ));

  constructor(private route: ActivatedRoute, private orderStore: OrderStore) {

  }
}
