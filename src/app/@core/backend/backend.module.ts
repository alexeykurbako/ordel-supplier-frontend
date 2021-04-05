import {OrderData} from '../interfaces/orders';
import {OrdersService} from './services/orders.service';
import {OrdersApi} from './api/orders.api';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpService} from './common/api/http.service';
import {ProductData} from '../interfaces/products';
import {ProductsService} from './services/products.service';
import {ProductsApi} from './api/products.api';

const API = [OrdersApi, ProductsApi, HttpService];

const SERVICES = [
  {provide: OrderData, useClass: OrdersService},
  {provide: ProductData, useClass: ProductsService},
];

@NgModule({
  imports: [],
})
export class BackendModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: BackendModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
