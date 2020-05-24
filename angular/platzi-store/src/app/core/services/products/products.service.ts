import { Injectable } from '@angular/core';
import { Product } from './../../../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Product[] = [
    {
      id: '1',
      image: 'assets/images/11.png',
      price: 1000,
      description: 'soy 11'
    },
    {
      id: '2',
      image: 'assets/images/12.png',
      price: 1000,
      description: 'soy 11'
    },
    {
      id: '3',
      image: 'assets/images/13.png',
      price: 100000,
      description: 'soy 11'
    },
    {
      id: '4',
      image: 'assets/images/14.png',
      price: 10000,
      description: 'soy 14'
    },
    {
      id: '5',
      image: 'assets/images/15.png',
      price: 10000,
      description: 'soy 15'
    },
  ];
  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find(item => id === item.id);
  }
}
