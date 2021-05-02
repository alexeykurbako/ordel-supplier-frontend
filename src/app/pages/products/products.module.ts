import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from '../shared/shared.module';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductsComponent} from './products.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    SharedModule,
    ImageCropperModule,
  ],
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductEditComponent,
  ],
})
export class ProductsModule {}
