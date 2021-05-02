import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {Observable, Subject} from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import {User, UserData} from '../../../@core/interfaces/common/users';
import {NbAuthOAuth2JWTToken, NbTokenService} from '@nebular/auth';
import {Product, ProductData} from '../../../@core/interfaces/products';
import {takeUntil} from 'rxjs/operators';
import {ImageCroppedEvent} from 'ngx-image-cropper';


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
              private router: Router,
              private route: ActivatedRoute,
              private tokenService: NbTokenService,
              private toasterService: NbToastrService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initUserForm();
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

  initUserForm() {
    this.productForm = this.fb.group({
      id: this.fb.control(''),
      name: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
      uom: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
      brand: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
      description: this.fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
      price: this.fb.control('', [Validators.required, Validators.min(0), Validators.max(1000)]),
      count: this.fb.control('', [Validators.required, Validators.min(0), Validators.max(100)]),
    });
  }

  convertToProduct(value: any): Product {
    const product: Product = value;
    product.image = this.croppedImage;
    return product;
  }

  save() {
    const product: Product = this.convertToProduct(this.productForm.value);

    let observable = new Observable<Product>();
    observable = this.productsService.create(product);
    // let observable = new Observable<Product>();
    // if (this.mode === ProductMode.ADD) {
    //
    // } else {
    //   observable = user.id
    //     ? this.usersService.update(user)
    //     : this.productsService.create(user);
    // }

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
    this.toasterService.danger('', `This email has already taken!`);
  }
}
