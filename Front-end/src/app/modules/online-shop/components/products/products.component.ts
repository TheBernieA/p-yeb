import { Component } from '@angular/core';
import { PRODUCTS } from '../../shop-dummy-db';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = PRODUCTS
}
