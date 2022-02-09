import { Component, OnInit } from '@angular/core';
import { StoreService  } from "../../services/store.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  counter:number=0;
  constructor(private storeService:StoreService) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(data=>{
      this.counter=data.length
    })
  }

}
