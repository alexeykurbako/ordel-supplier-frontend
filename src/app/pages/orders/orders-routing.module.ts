import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from './orders.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        component: OrdersListComponent,
      },
      {
        path: ':id',
        component: OrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {
}
