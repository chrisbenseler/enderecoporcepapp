import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { AboutPage } from './about';
import { TestUtils } from '../../test'

import { AppVersion } from '@ionic-native/app-version';

import { MockBackend } from '@angular/http/testing';
import { XHRBackend } from '@angular/http';

import { ConfigMock, NavMock, PlatformMock, AppVersionMock } from '../../mocks';
 
let instance: AboutPage = null;
let fixture: ComponentFixture<AboutPage> = null;
 
describe('Component: AboutPage Component', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 			declarations: [ AboutPage ],
            providers: [
              { provide: AppVersion, useClass: AppVersionMock },
              { provide: Platform, useClass: PlatformMock }
            ]
 
        })
 
    }));

    
    beforeEach(async(() => TestUtils.beforeEachCompiler([AboutPage]).then(compiled => {
		fixture = compiled.fixture;
		instance = compiled.instance;
		fixture.autoDetectChanges(true)

	})))
	
 
    it('is created', () => {
 
        expect(fixture).toBeTruthy();
        expect(instance).toBeTruthy();
 
    });

	it('should have proper version', (done) => {

		instance.platform.is = () => false;

		spyOn(instance.appVersion, 'getVersionNumber').and.callThrough();

		instance.ionViewDidLoad();

		expect(instance.appVersion.getVersionNumber).toHaveBeenCalled();

		setTimeout( () => {
			expect(instance.versionnumber).toBe(20);
			done();
		});

	});

	it('should handle error', (done) => {

		instance.platform.is = () => false;

		instance.appVersion.getVersionNumber = () => {
			return new Promise( ( resolve, reject) => {
				reject(new Error())
			})
		}

		setTimeout( () => {

			let x = instance.ionViewDidLoad();
			x.catch(e => {
				expect(e instanceof Error).toBeTruthy();
				done();	
			})
			
		});

	});
 
 
});