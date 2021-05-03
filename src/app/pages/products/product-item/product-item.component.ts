import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderProductView, Product } from '../../../@core/interfaces/products';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngx-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
  @Input() productItem: Product;
  @Output() addProduct: EventEmitter<OrderProductView> = new EventEmitter();

  count: FormControl = new FormControl(1);

  isImageUrl() {
    return /^((http|https|ftp):\/\/)/.test(this.productItem.image);
  }

}
