import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { AboutPage } from './about';
import { TestUtils } from '../../test'

import { AppVersion } from '@ionic-native/app-version';

import { TranslateModule } from 'ng2-translate'
import { MockBackend } from '@angular/http/testing';
import { XHRBackend } from '@angular/http';

import { ConfigMock, NavMock, PlatformMock } from '../../mocks';
 
let instance: AboutPage = null;
let fixture: ComponentFixture<AboutPage> = null;
 
describe('Component: AboutPage Component', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 			declarations: [ AboutPage ],
            providers: [
              AppVersion,
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
 
 
});