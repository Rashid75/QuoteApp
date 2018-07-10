import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage {
  quoteCollection: { category: string, quote: Quote[], icon: string }[];
  quotePage = QuotesPage;
  constructor() {
    this.quoteCollection = quotes;
  }

}
