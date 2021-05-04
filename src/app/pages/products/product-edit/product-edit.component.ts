import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {Subject} from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import {NbTokenService} from '@nebular/auth';
import {Product, ProductData} from '../../../@core/interfaces/products';
import {takeUntil} from 'rxjs/operators';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import {ProductStore} from '../../../@core/stores/product.store';


export enum ProductMode {
  EDIT = 'Edit',
  ADD = 'Add',
}

@Component({
  selector: 'ngx-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;

  showCropper = false;

  protected readonly unsubscribe$ = new Subject<void>();

  get brand() { return this.productForm.get('brand'); }

  get description() { return this.productForm.get('description'); }

  get name() { return this.productForm.get('name'); }

  get uom() { return this.productForm.get('uom'); }

  get price() { return this.productForm.get('price'); }

  get count() { return this.productForm.get('count'); }

  mode: ProductMode;
  setViewMode(viewMode: ProductMode) {
    this.mode = viewMode;
  }

  constructor(private productsService: ProductData,
              private productStore: ProductStore,
              private router: Router,
              private route: ActivatedRoute,
              private tokenService: NbTokenService,
              private toasterService: NbToastrService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initUserForm();
    this.loadUserData();
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded(image: HTMLImageElement) {
    this.showCropper = true;
  }
  loadImageFailed() {
    this.toasterService.danger('', `It's impossible to upload this image`);
  }

  loadUserData() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.setViewMode(ProductMode.EDIT);
      this.loadProduct(id);
    } else {
      this.setViewMode(ProductMode.ADD);
    }
  }

  loadProduct(id) {
    this.productStore.products$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((products) => {
        const product = products.find((prod) => prod.id === id);
        this.productForm.setValue({
          id: product.id ? product.id : '',
          productItemId: product.clientProducts[0].id ? product.clientProducts[0].id : '',
          name: product.name ? product.name : '',
          image: product.image ? product.image : '',
          uom: product.uom ? product.uom : '',
          brand: product.brand ? product.brand : '',
          description: product.details ? product.details : '',
          price: product.clientProducts[0].price ? product.clientProducts[0].price : '',
          count: product.clientProducts[0].count ? product.clientProducts[0].count : '',
        });
    });
  }

  initUserForm() {
    this.productForm = this.fb.group({
      id: this.fb.control(''),
      productItemId: this.fb.control(''),
      image: this.fb.control(''),
      name: this.fb.control('', [Validators.minLength(3), Validators.maxLength(220)]),
      uom: this.fb.control('', [Validators.minLength(3), Validators.maxLength(220)]),
      brand: this.fb.control('', [Validators.minLength(3), Validators.maxLength(220)]),
      description: this.fb.control('', [Validators.minLength(3), Validators.maxLength(220)]),
      price: this.fb.control('', [Validators.required, Validators.min(0), Validators.max(1000)]),
      count: this.fb.control('', [Validators.required, Validators.min(0), Validators.max(100)]),
    });
  }

  convertToProduct(value: any): Product {
    const product: Product = value;
    product.image = product.image ? product.image : this.croppedImage;
    return product;
  }

  save() {
    const product: Product = this.convertToProduct(this.productForm.value);

    let observable;
    if (this.mode === ProductMode.ADD) {
      observable = this.productsService.create(product);
    } else {
      observable = this.productsService.update(product);
    }

    observable
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
          this.handleSuccessResponse();
        },
        err => {
          this.handleWrongResponse();
        });
  }

  back() {
    this.router.navigate(['/products']);
  }

  handleSuccessResponse() {
    this.toasterService.success('', `Item ${this.mode === ProductMode.ADD ? 'created' : 'updated'}!`);
    this.back();
  }

  handleWrongResponse() {
    this.toasterService.danger('', `Something went wrong!`);
  }
}
