import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProductStore} from '../../../@core/stores/product.store';
import {NbToastrService} from '@nebular/theme';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {

  constructor(public productStore: ProductStore,
              private router: Router,
              private toastrService: NbToastrService) {
  }

  handleAddClick() {
    this.router.navigate(['/products/add']);
  }
}
