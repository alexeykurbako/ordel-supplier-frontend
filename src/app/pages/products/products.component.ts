import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProductStore} from '../../@core/stores/product.store';

@Component({
  selector: 'ngx-orders',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {

  constructor() {
  }

  openOrder(id: number) {

  }
}
