import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HelperService} from "../../core/services";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  slug: any = null;
  product: any = null;
  constructor(public route: ActivatedRoute ,  private helper: HelperService) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.helper.http.getProductBasedOnSlug(this.slug).subscribe(res => {
      this.product = res;
    })
  }
  addToCart = (product: any) => {
    this.helper.common.addToCart(product)
  }

}
