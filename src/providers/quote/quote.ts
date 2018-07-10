import { Injectable } from '@angular/core';
import { Quote } from '../../data/quote.interface';

@Injectable()
export class QuoteProvider {
  favouriteList: Quote[] = []
  addFavourite(quote: Quote) {
    this.favouriteList.push(quote);
  }
  getFavourite() {
    return this.favouriteList.slice();
  }
}
