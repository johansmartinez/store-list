import { Component } from '@angular/core';
import { Product} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user={
    name:'',
    email:'',
    password:'',
  }

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
    {
      name:'leche',
      price:3000,
      image:'https://ecommerce.productoselrecreo.com/backend/admin/backend/web/archivosDelCliente/items/images/20210109090444-Productos-Leche--LECHE-ENTERA---900-mL-28202101090904449811.jpg'
    },
    {
      name:'Jabón',
      price:2300,
      image:'https://img.freepik.com/psd-gratis/paquete-caja-envoltura-jabon-jabon-barra-aislado-sobre-fondo-azul_70626-11994.jpg?size=626&ext=jpg'
    },
    {
      name:'donas',
      price:6000,
      image:'https://previews.123rf.com/images/dafna93/dafna931701/dafna93170100015/70228327-ilustraci%C3%B3n-vectorial-de-color-rosa-dona-glaseado-de-color-rosa-con-polvo-azul.jpg'
    },
  ];

  onSubmit(){
    console.log(this.user);
  }

}
