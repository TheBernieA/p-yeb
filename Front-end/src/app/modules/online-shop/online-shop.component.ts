import { Component, OnInit } from '@angular/core';
import { OnlineShopService } from './services/online-shop.service';

@Component({
  selector: 'app-online-shop',
  templateUrl: './online-shop.component.html',
  styleUrls: ['./online-shop.component.scss']
})
export class OnlineShopComponent implements OnInit {

  constructor(private shopService: OnlineShopService) { }

  ngOnInit(): void {
    // this.shopService.getProducts().subscribe(data => console.log(data)
    // )
  }
}
