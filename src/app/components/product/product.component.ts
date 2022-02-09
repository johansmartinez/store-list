import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product={
    id: '',
    title: '',
    price: 0,
    image: ''
  };

  @Output() onAddProduct= new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart(){
    this.onAddProduct.emit(this.product);
  }
}
