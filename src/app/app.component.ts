import { Component,OnInit} from '@angular/core';
import { Product} from './models/product.model'
import {StoreService} from './services/store.service';
import {ProductService} from './services/product.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  children:string='';
  user={
    name:'',
    email:'',
    password:'',
  }
  year:Date=new Date("2/8/2021");
  myShoppingCart:Product[]=[];
  total:Number=0;

  constructor(
    private storeService:StoreService,
    private productService:ProductService
  ){
    this.myShoppingCart=storeService.getShoppingCart();
  }
  ngOnInit(): void {
    this.productService.getAllProduct()
    .subscribe((data)=>{
      this.products=data
    })
  }

  products: Product[]=[];

  onSubmit(){
    console.log(this.user);
  }

  onImgLoaded(img:string){
    alert(`La imagen ${img} se cargo completamente!`)
  }

  onAddToCart(product:Product){
    this.storeService.addProductToShoppingCart(product);
    this.total=this.storeService.getTotal();
  }
}
