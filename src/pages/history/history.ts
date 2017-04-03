import { Component } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

import { MapPage } from '../map/map';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

	addresses: Array<any> = [];

	constructor(public modal: ModalController,
				public alertCtrl: AlertController,
				public translate: TranslateService,
				public storage: Storage) {

	}

	ionViewDidEnter() {
		this.load()
	}

	load() {

		this.storage.get('ceps')
		.then( ceps => {
		if(ceps) {
			let promises = ceps['keys'].map( 
				cep => this.storage.get(cep).then( address => JSON.parse(address) )
			)
			Promise.all(promises).then(data => {
				this.addresses = data;
			})
		}
		})
	}

	handle_delete_click() {

		let alert = this.alertCtrl.create({
			title: this.translate.instant('history.alerttitle'),
			subTitle: this.translate.instant('history.alertdescription'),
			buttons: [
				{ text: this.translate.instant('alert.cancel'), role: 'cancel', },
				{ text: this.translate.instant('alert.confirm'), handler: () => {
					this.delete();
				}}
			]
		});
		alert.present();

		
	}

	delete() {
		this.storage.get('ceps')
		.then( ceps => {
			if(ceps) {
			let promises = ceps['keys'].map( cep => {
				return this.storage.remove(cep)
			})
			return Promise.all(promises).then(data => {
				return this.storage.remove('ceps')
			})
			}
		})
		.then( () => {
			this.addresses = [];
		})
	}

	handle_address_click(data) {
		let modal = this.modal.create(MapPage, { data });
		modal.present();
	}

}
