import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { Quote } from "../../data/quote.interface";

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-quote",
  templateUrl: "quote.html"
})
export class QuotePage {
  quote: Quote;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    this.quote = this.navParams.data;
  }
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
