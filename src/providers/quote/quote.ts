import { Injectable } from "@angular/core";
import { Quote } from "../../data/quote.interface";

@Injectable()
export class QuoteProvider {
  favouriteList: Quote[] = [];
  addFavourite(quote: Quote) {
    this.favouriteList.push(quote);
  }
  getFavourite() {
    return this.favouriteList.slice();
  }
  removeFavourite(quote: Quote) {
    const position = this.favouriteList.findIndex((el: Quote) => {
      return el.id === quote.id;
    });
    this.favouriteList.splice(position, 1);
  }
  isFavourite(quote: Quote) {
    return this.favouriteList.find((el: Quote) => {
      return el.id === quote.id;
    });
  }
}
