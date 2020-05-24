import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  public title = 'platzi-store';
  public items = [ 'yrlen', 'alex', 'bari' ];
  public power = 10;
  constructor() { }

  ngOnInit(): void {
  }

  public addItem(){
    this.items.push('nuevo item');
  }

  public deleteItem(index: number){
    this.items.splice(index, 1);
  }


}
