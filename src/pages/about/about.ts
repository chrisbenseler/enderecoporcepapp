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

  		console.log(this.appVersion.getVersionNumber())

		if (this.platform.is('cordova')) {

			this.appVersion.getVersionNumber().then( version => {
				console.log(version)
				this.versionnumber = version;
			});
		}
	}

}
