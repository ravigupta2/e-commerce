import {Component, OnDestroy, OnInit} from '@angular/core';
import {HelperService} from "../../core/services";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  products:any = []
  productsSub: Subscription;
  constructor(private helper:HelperService , private router: Router) {
    this.productsSub = this.helper.http.getProducts().subscribe(res =>{
      this.products = res;
      console.log(res);
    })
  }

  ngOnInit(): void {
  }
  addToCart = (product: any) => {
    this.helper.common.addToCart(product)
  }
  goToProduct  = (item: { id: any; }) => {
    this.router.navigate(['product/' + item.id]);
  }
  ngOnDestroy() {

  }
}
