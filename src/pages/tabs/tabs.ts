import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  favourtePage = FavouritesPage;
  libraryPage = LibraryPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
