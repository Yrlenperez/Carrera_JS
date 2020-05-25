import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductComponent } from './../product/components/product/product.component';
import { ProductsComponent } from './../product/components/products/products.component';
import { ProductDetailComponent } from './../product/components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
