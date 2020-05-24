import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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

  ngOnInit(): void {
  }

  public clickProduct(id: number){
    console.log(id);
  }

}
