import { Component, OnInit,Input,Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy {

  @Input() img:string='';
  @Output() imgLoaded= new EventEmitter<string>();

  constructor() { 
    //no async y solo 1 vez
  }
  ngOnDestroy(): void {
    //cuando se elimina el componente
  }

  ngAfterViewInit(): void {
    //depués del render
    //manejan los hijos
  }

  ngOnChanges(){
    //después del constructor y antes del render
    // cambios en inputs
    //muchas veces
  }

  ngOnInit(): void {
    //antes del render y después del Onchanges
    //se pueden hacer async ó fetc
  }


  onError(){

  }
  onLoad(){
    this.imgLoaded.emit(this.img);
  }

}
