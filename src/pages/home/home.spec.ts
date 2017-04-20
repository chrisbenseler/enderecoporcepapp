import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, Platform, ModalController, NavController, LoadingController, ToastController } from 'ionic-angular';
import { HomePage } from './home';
import { TestUtils } from '../../test';

import { Storage } from '@ionic/storage';

import { MockBackend } from '@angular/http/testing';
import { XHRBackend } from '@angular/http';

import { StorageMock, PlatformMock, ModalControllerMock, NavMock, LoadingControllerMock, addressMock } from '../../mocks';

import { AddressComponent } from '../../components/address/address';

let instance: HomePage = null;
let fixture: ComponentFixture<HomePage> = null;

describe('Component: HomePage Component', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ HomePage, AddressComponent ],
            providers: [
              { provide: ModalController, useClass: ModalControllerMock },
              { provide: Storage, useClass: StorageMock },
              { provide: NavController, useClass: NavMock },
              { provide: Platform, useClass: PlatformMock },
              { provide: LoadingController, useClass: LoadingControllerMock },
              ToastController
            ]
    });
  }));

  beforeEach(async(() => TestUtils.beforeEachCompiler([HomePage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
    fixture.autoDetectChanges(true);
  })));

  it('is created', () => {
      expect(fixture).toBeTruthy();
      expect(instance).toBeTruthy();
  });

  it('should handle address click', () => {
    spyOn(instance.modal, 'create').and.callThrough();
    instance.handle_address_click({});
    expect(instance.modal.create).toHaveBeenCalled();
  });

  it('should handle add address click', () => {
    spyOn(instance.storage, 'set').and.callThrough();
    instance.add_address_storage({});
    expect(instance.storage.set).toHaveBeenCalled();
  });

  it('should handle add address to storage', () => {
    spyOn(instance.storage, 'get').and.callThrough();
    instance.add_key_storage({});
    expect(instance.storage.get).toHaveBeenCalledWith('ceps');
  });

  it('should handle submit', () => {
    instance.cep = function() {
      return new Promise(function(resolve: Function): void {
       resolve(addressMock);
      });
    };
    instance.onSubmit();
    expect(instance.address).toBe(null);
  })

});
