import { Component } from '@angular/core';
import { PRODUCTS } from '../../shop-dummy-db';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent {
  product = PRODUCTS

}
