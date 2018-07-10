import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { TabsPage } from "../pages/tabs/tabs";
import { FavouritesPage } from "../pages/favourites/favourites";
import { LibraryPage } from "../pages/library/library";
import { QuotesPage } from "../pages/quotes/quotes";
import { QuoteProvider } from "../providers/quote/quote";
import { QuotePage } from "../pages/quote/quote";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      iconMode: "ios",
      pageTransition: "ios-transition",
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavouritesPage,
    LibraryPage,
    QuotesPage,
    QuotePage
  ],

  providers: [
    StatusBar,
    QuoteProvider,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuoteProvider
  ]
})
export class AppModule {}
