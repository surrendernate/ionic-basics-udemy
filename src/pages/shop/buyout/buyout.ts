import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
  product: string;
  itemPrice: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get('productName');
    this.itemPrice = this.navParams.get('price');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }


  onGoToHome() {
    this.navCtrl.popToRoot();
  }

}
