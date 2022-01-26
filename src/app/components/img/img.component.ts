import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img:string='';
  @Output() imgLoaded= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onError(){

  }
  onLoad(){
    this.imgLoaded.emit(this.img);
  }

}
