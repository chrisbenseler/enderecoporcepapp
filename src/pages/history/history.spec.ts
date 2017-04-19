import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, Platform, ModalController, AlertController } from 'ionic-angular';
import { HistoryPage } from './history';
import { TestUtils } from '../../test';

import { Storage } from '@ionic/storage';

import { MockBackend } from '@angular/http/testing';
import { XHRBackend } from '@angular/http';

import { StorageMock, PlatformMock, ModalControllerMock, AlertControllerMock } from '../../mocks';

import { AddressComponent } from '../../components/address/address';

let instance: HistoryPage = null;
let fixture: ComponentFixture<HistoryPage> = null;

describe('Component: HistoryPage Component', () => {

  beforeEach(async(() => {

      TestBed.configureTestingModule({
        declarations: [ HistoryPage, AddressComponent ],
              providers: [
                { provide: ModalController, useClass: ModalControllerMock },
                { provide: AlertController, useClass: AlertControllerMock },
                { provide: Storage, useClass: StorageMock },
                { provide: Platform, useClass: PlatformMock }
              ]
           });
      }));

  beforeEach(async(() => TestUtils.beforeEachCompiler([HistoryPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.autoDetectChanges(true);
  })));

  it('is created', () => {
      expect(fixture).toBeTruthy();
      expect(instance).toBeTruthy();
  });

  it('should load history', (done) => {
    spyOn(instance, 'load').and.callThrough();
    spyOn(instance.storage, 'get').and.callThrough();
    instance.ionViewDidEnter();
    setTimeout( () => {
      expect(instance.load).toHaveBeenCalled();
      expect(instance.storage.get).toHaveBeenCalledWith('ceps');
      done();
    });
  });

  it('should delete history', (done) => {
    spyOn(instance.storage, 'get').and.callThrough();
    spyOn(instance.storage, 'remove').and.callThrough();
    instance.delete();
    setTimeout( () => {
      expect(instance.storage.get).toHaveBeenCalledWith('ceps');
      expect(instance.storage.remove).toHaveBeenCalledWith('04477100');
      expect(instance.addresses.length).toBe(0);
      done();
    });
  });

  it('should handle address click', () => {
    spyOn(instance.modal, 'create').and.callThrough();
    instance.handle_address_click({});
    expect(instance.modal.create).toHaveBeenCalled();
  });

  it('should handle delete click', () => {
    spyOn(instance.alertCtrl, 'create').and.callThrough();
    instance.handle_delete_click();
    expect(instance.alertCtrl.create).toHaveBeenCalled();
  });

});
