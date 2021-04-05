import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgxValidationMessageComponent} from './validation-message/validation-message.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {OrderProductComponent} from './order-details/order-product/order-product.component';
import {
  NbBadgeModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbTooltipModule,
} from '@nebular/theme';

const COMPONENTS = [
  NgxValidationMessageComponent,
  OrderDetailsComponent,
  OrderProductComponent,
];

const NEBULAR_MODULES = [
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbBadgeModule,
  NbTooltipModule,
  NbSelectModule,
];

@NgModule({
  imports: [
    ...NEBULAR_MODULES,
    FormsModule,
    CommonModule,
  ],
  exports: [...COMPONENTS, ...NEBULAR_MODULES],
  declarations: [...COMPONENTS],
})
export class ComponentsModule {
}
