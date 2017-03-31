import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateModule } from '@ngx-translate/core';
import { MockBackend } from '@angular/http/testing';
import { XHRBackend } from '@angular/http';

import { PlatformMock } from '../mocks'
 
let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
 
describe('Component: Root Component', () => {
 
    beforeEach(async(() => {
 
        TestBed.configureTestingModule({
 
            declarations: [MyApp],
 
            providers: [
              { provide: XHRBackend, useClass: MockBackend },
              StatusBar,
              SplashScreen,
              { provide: Platform, useClass: PlatformMock }
            ],
 
            imports: [
                IonicModule.forRoot(MyApp),
                TranslateModule.forRoot()
            ]
 
        }).compileComponents();
 
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(MyApp);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
    });
 
    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();
    });
 
    it('initialises with a root page of HomePage', () => {
        
        expect(comp['rootPage']).toBe(TabsPage);
    });

    
    it('should use native plugins', () => {
        spyOn(comp.statusBar, 'styleDefault');
        comp.ready();
        expect(comp.statusBar.styleDefault).toHaveBeenCalled()
    })
    
});