import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { QuoteProvider } from "../../providers/quote/quote";
import { Quote } from "../../data/quote.interface";
import { QuotePage } from "../quote/quote";

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-favourites",
  templateUrl: "favourites.html"
})
export class FavouritesPage {
  favouriteCollection: Quote[];

  constructor(
    public service: QuoteProvider,
    private modalCtrl: ModalController
  ) {}
  ionViewWillEnter() {
    this.favouriteCollection = this.service.getFavourite();
  }
  viewDetail(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveQuote(quote);
      }
    });
  }
  onRemoveQuote(quote: Quote) {
    this.service.removeFavourite(quote);
    this.favouriteCollection = this.service.getFavourite();
  }
}
