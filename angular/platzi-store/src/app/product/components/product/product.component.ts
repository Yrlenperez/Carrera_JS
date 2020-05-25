import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit } from '@angular/core';

import {Product} from './../../../models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnChanges, OnInit{
    @Input() public data: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    today = new Date();
    constructor(){
        // console.log('1. constructor');
    }

    ngOnChanges(changes: SimpleChanges){
        // detecta los cambios o estados anterior y nuevo
        // console.log('2. ngOnchanges');
        // console.log(changes);
    }

    ngOnInit(){
        // se ejecuta solo una vez cuando el componente fue puesto en pantalla
        // console.log('3. ngOnInit');
    }

    public addCart(){
        console.log('Se añadio al carrito');
        this.productClicked.emit(this.data.id);
    }
}
