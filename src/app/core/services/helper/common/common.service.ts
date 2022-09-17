import {Injectable} from '@angular/core';
// import * as data from '../../../../../assets/json/product.json';
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn: 'root'
})

export class CommonService {
  products: any = [];
  cart: any = [];
  cartCount = 0;
  price = 0;
  constructor(private toaster: ToastrService) {
  }
  addToCart = (product: any) => {
    console.log(product);
    if(this.cart.length == 0){
      this.cart.push(product)
    } else {
      let found = this.cart.find((data: { slug: any; }) => data.slug === product.slug);
      if(found){
        found.quantity += 1
      } else {
        this.cart.push(product)
      }
    }
    this.cartCount = this.cart.length;
    this.price = this.calculateTotal();
    console.log(this.cart)
  }
  showSuccess(message: string | undefined) {
    this.toaster.success(message);
  }
  showError(message: string | undefined) {
    this.toaster.error(message);
  }
  changeCart = (product: any , add = false ) => {
    let found = this.cart.find((data: { slug: any; }) => data.slug === product.slug);
    if(!add){
      if(found.quantity > 1){
        found.quantity -= 1
      } else {
        this.cart.splice(this.cart.indexOf(found), 1)
      }
    } else {
      found.quantity += 1
    }
    this.cartCount = this.cart.length;
    this.price = this.calculateTotal();
    console.log(this.cart)
  }
  calculateTotal = () => {
    let total = 0;
    this.cart.forEach((data: { price: any; quantity: any; }) => {
      total += data.price * data.quantity
    } )
    return total;
  }
}
