import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuoteProvider } from '../../providers/quote/quote';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {

  constructor(public service: QuoteProvider) {
    console.log(this.service.getFavourite())
  }
}
