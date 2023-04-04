import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnlineShopService {

  constructor(private http: HttpClient) { }
  private url = 'v1/online-shop'
  getProducts() {
    return this.http.get(`http://localhost:3000/${this.url}/products`)
  }
}
