import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { default as cep } from 'cep-promise';
import { Storage } from '@ionic/storage';
import { LoadingController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	zipcode:string;
	address:any = null;
	cep:any = cep;

	constructor(public navCtrl: NavController,
				public storage: Storage,
				public modal: ModalController,
				public translate: TranslateService,
				public loadingCtrl: LoadingController,
				private toastCtrl: ToastController) {

	}

	onSubmit() {
		this.address = null;

		let loader = this.loadingCtrl.create({
			content: this.translate.instant('loader.wait')
		});
		loader.present();
		
		this.cep(this.zipcode).then( data => {
			loader.dismiss();
			this.address = data;
	  		return data;
		})
		.then( this.add_address_storage.bind(this) )
		.then( this.add_key_storage.bind(this) )
		.catch( err => {
			loader.dismiss();

			let toast = this.toastCtrl.create({
				message: this.translate.instant('cep.error'),
				duration: 2000
			});
			toast.present();
		})
	}

	add_address_storage(address) {
		this.storage.set(address.cep, JSON.stringify(address));
		return address;
	}

	
	add_key_storage(address) {
		this.storage.get('ceps')
		.then( ceps => {
			if(!ceps)
				ceps = {}
			
			ceps['keys'] = ceps['keys'] || []
			if(ceps['keys'].indexOf(address.cep) < 0) {
				ceps['keys'].push(address.cep)
				this.storage.set('ceps', ceps)
			}
		})
		
	}

	handle_address_click(data) {
		let modal = this.modal.create(MapPage, { data });
		modal.present();
	}

}
