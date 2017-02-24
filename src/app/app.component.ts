import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform, translate: TranslateService) {

    translate.setDefaultLang('pt-br');
    translate.use('pt-br');

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
