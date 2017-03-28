import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { HistoryPage } from './history';
import { TestUtils } from '../../test'

import { NavController, ModalController, Platform } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { TranslateModule } from 'ng2-translate'
import { MockBackend } from '@angular/http/testing';
import { XHRBackend } from '@angular/http';

import { StorageMock, PlatformMock } from '../../mocks';

import { AddressComponent } from '../../components/address/address';
 
let instance: HistoryPage = null;
let fixture: ComponentFixture<HistoryPage> = null;
 
describe('Component: HistoryPage Component', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 			declarations: [ HistoryPage, AddressComponent ],
            providers: [
              NavController,
              ModalController,
              { provide: Storage, useClass: StorageMock },
              { provide: Platform, useClass: PlatformMock }
            ]
 
        })
 
    }));

    
    beforeEach(async(() => TestUtils.beforeEachCompiler([HistoryPage]).then(compiled => {
		fixture = compiled.fixture;
		instance = compiled.instance;
		fixture.autoDetectChanges(true)

	})))
	
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(instance).toBeTruthy();
 
    });


	it('should load data', () => {
		spyOn(instance, 'load').and.callThrough();
		spyOn(instance.storage, 'get').and.callThrough();
		instance.ionViewDidEnter();
		expect(instance.load).toHaveBeenCalled();
		expect(instance.storage.get).toHaveBeenCalledWith('ceps');
	})


 
 
});