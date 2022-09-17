import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../core/services";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(public helper: HelperService) { }

  ngOnInit(): void {
  }
  changeCart =  (product: any, action: boolean | undefined) => {
    this.helper.common.changeCart(product , action)
  }
}
