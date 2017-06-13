import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { BuyoutPage } from "./buyout/buyout"

@Component({
    selector: 'page-shop',
    templateUrl: 'shop.html'
})
export class ShopPage {
    product: string;
    price: string;

    constructor(private navCtrl: NavController) {
        
    }
    onGoToBuyout(product, price){
      this.navCtrl.push(
      	BuyoutPage, 
      	{
      		productName: product,
      		price: price
      	}
      );
    }
}