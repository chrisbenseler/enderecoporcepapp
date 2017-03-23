import { Component } from '@angular/core';
import { AppVersion } from '@ionic-native/app-version';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	public versionnumber: any = 1;

	constructor(
		public platform: Platform,
		private appVersion: AppVersion
		) {
	}

	ionViewDidLoad() {
		if (!this.platform.is('core')) {
			this.appVersion.getVersionNumber().then( version => {
				this.versionnumber = version;
			})
			.catch( error => {
				console.error(error);
			})
		}
	}

}
