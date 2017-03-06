import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

import {
	Geocoder,
	GeocoderRequest,
	Geolocation
} from 'ionic-native';


/*
  Generated class for the Map page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

	lat: number = null;
  	lng: number = null;
  	data: any = null;

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				public viewCtrl: ViewController,
				public loadingCtrl: LoadingController) {
				
		this.data = navParams.get('data');

		
	}

	ionViewDidEnter() {
		this.load();
	}

	load() {
		let loading = this.loadingCtrl.create();
		loading.present();
		let req: GeocoderRequest = { address: this.data.cep }
		Geocoder.geocode( req ).then( results => {
			this.lat = results[0].position.lat;
			this.lng = results[0].position.lng;
			loading.dismiss();
		})
		.catch( error => {
			loading.dismiss();
		})
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}


}
