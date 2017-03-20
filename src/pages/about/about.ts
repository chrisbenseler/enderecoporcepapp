import { Component } from '@angular/core';
import { AppVersion } from 'ionic-native';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	public versionnumber: any = 1;
	public appVersion: any = AppVersion;

	constructor(public platform: Platform) {
	}

  ionViewDidLoad() {

		if (this.platform.is('cordova')) {

			this.appVersion.getVersionNumber().then( version => {
				this.versionnumber = version;
			});
		}
	}

}
