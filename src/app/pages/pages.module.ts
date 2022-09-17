import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProductComponent,
    CheckoutComponent,
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        SharedModule,
    ],

})
export class PagesModule {

}
