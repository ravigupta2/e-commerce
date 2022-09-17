import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
@Injectable({
  providedIn: 'root'
})

export class HttpService {
  apiUrl = '';
  constructor(public http: HttpClient) {
    this.apiUrl = environment.url
  }
  getProducts(){
    const url = this.apiUrl + `products`;
    return this.http.get(url);
  }
  getProductBasedOnSlug(id: any){
    const url = this.apiUrl + `products/${id}`;
    return this.http.get(url);
  }
}
