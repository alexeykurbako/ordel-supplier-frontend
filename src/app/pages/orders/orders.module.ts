import {NgModule} from '@angular/core';
import {OrdersRoutingModule} from './orders-routing.module';
import {OrdersComponent} from './orders.component';
import {OrderItemComponent} from './orders-list/order-item/order-item.component';
import {SharedModule} from '../shared/shared.module';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order/order.component';
import {ComponentsModule} from '../../@components/components.module';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersListComponent,
    OrderItemComponent,
    OrderComponent,
  ],
  imports: [
    OrdersRoutingModule,
    SharedModule,
    CommonModule,
    ComponentsModule,
  ],
})
export class OrdersModule {
}
