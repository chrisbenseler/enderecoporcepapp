import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html',

})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tabHistory: any = HistoryPage;

  constructor() {

  }
}
