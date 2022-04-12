import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  showProductDetail:boolean= false;
  @Input() product: Product={
    id: '',
    title: '',
    price: 0,
    images: [],
    description:'',
    category:{
      id:0,
      name:'',
      typeImg:''
    }
  };
  
  @Output() onAddProduct= new EventEmitter<Product>();
  
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  addProductToCart(){
    this.onAddProduct.emit(this.product);
  }

  toggleDetails(){
    this.showProductDetail=!this.showProductDetail;
  }
}
