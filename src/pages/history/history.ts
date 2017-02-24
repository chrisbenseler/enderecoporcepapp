import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {

	addresses: Array<any> = [];

  constructor(public navCtrl: NavController,
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
		} else {
			this.addresses = []
		}
  	})
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
  	.then( () => this.load() )

    
  }

}
