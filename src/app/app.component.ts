import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(private platform: Platform,
              private translate: TranslateService,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen) {

    translate.setDefaultLang('pt-br');
    translate.use('pt-br');


    platform.ready().then(() => this.ready() );
  }

  // Okay, so the platform is ready and our plugins are available.
  // Here you can do any higher level native things you might need.
  ready() {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }
}
