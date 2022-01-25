import { Component } from '@angular/core';
import { Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'nezzy';
  age = 14;
  image= 'https://cdn.icon-icons.com/icons2/1369/PNG/512/-person_90382.png';
  btnDisable=true;
  array: string[]=[ '🐮','🦓', '🐸','🐼','🐨'];
  newitem:string ='';
  products: Product[]=[
    {
      name:'Cebolla',
      price:2500,
      image:'https://t2.uc.ltmcdn.com/images/7/7/3/img_como_sembrar_cebollas_20377_orig.jpg'
    },
    {
      name:'Agua',
      price:2000,
      image: 'https://us.123rf.com/450wm/makc76/makc761606/makc76160600105/58843037-piso-ilustraci%C3%B3n-del-vector-del-estilo-de-la-botella-de-agua.jpg?ver=6'
    },
    {
      name:'arroz',
      price:4000,
      image:'https://carulla.vtexassets.com/arquivos/ids/3100616/Arroz-Fortificado-Roa-Bolsa-X-5000g-722262_a.jpg?v=637469952144600000'
    },
  ];

  toggleBtn(){
    this.btnDisable=!this.btnDisable
  }

  scrollbox(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.name=element.value;
  }

  addItem(){
    this.array.push(this.newitem);
    this.newitem="";
  }

  deleteItem(index:number){
    this.array.splice(index,1);
  }
}
