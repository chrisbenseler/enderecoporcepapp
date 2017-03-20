import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

import { AppConfig } from '../../config';

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
				public http: Http,
				public loadingCtrl: LoadingController) {
		
		this.data = navParams.get('data');
		this.load();		
	}


	load() {

		let loading = this.loadingCtrl.create();
		loading.present();
		
		this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.data.cep}&key=${AppConfig.google_api_key}`)
		.subscribe( data => {
			let response = data.json();
			if(response.status == 'OK' && response.results.length > 0) {
				this.lat = response.results[0].geometry.location.lat;
				this.lng = response.results[0].geometry.location.lng;
			}
			loading.dismiss();
		})
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}


}
