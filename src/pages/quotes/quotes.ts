import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuoteProvider } from '../../providers/quote/quote';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  selectedCategory: { category: string, quote: Quote[], icon: string };
  constructor(public navParams: NavParams, private service: QuoteProvider) {
    this.selectedCategory = this.navParams.data;
    console.log(this.selectedCategory)
  }
  addToFavourite(quote: Quote) {
    this.service.addFavourite(quote);
  }
}
