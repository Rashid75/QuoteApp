import { Component } from "@angular/core";
import { NavParams, AlertController } from "ionic-angular";
import { Quote } from "../../data/quote.interface";
import { QuoteProvider } from "../../providers/quote/quote";

@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage {
  selectedCategory: { category: string; quote: Quote[]; icon: string };
  constructor(
    public navParams: NavParams,
    private service: QuoteProvider,
    private alertCtrl: AlertController
  ) {
    this.selectedCategory = this.navParams.data;
    console.log(this.selectedCategory);
  }
  addToFavourite(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      subTitle: "Are you sure?",
      message: "Are you sure you want to add the quote?",
      buttons: [
        {
          text: "Yes, go ahead",
          handler: () => {
            this.service.addFavourite(quote);
          }
        },
        {
          text: "No, Cancel it",
          role: "cancel",
          handler: () => {
            console.log("cancelled");
          }
        }
      ]
    });
    alert.present();
  }
  onRemoveFavourite(quote: Quote) {
    this.service.removeFavourite(quote);
  }
  isFavourite(quote: Quote) {
    return this.service.isFavourite(quote);
  }
}
