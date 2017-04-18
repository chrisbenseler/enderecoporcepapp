export class ConfigMock {

  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 1;
  }
};

export class ModalControllerMock {

  public create(): any {
    return {
      present: function() { }
    };
  }

  public present(): any {
    return new Promise(function(resolve: Function): void {
       resolve();
    });
  }
};

export class AlertControllerMock {

  public create(): any {
    return {
      present: function() { }
    };
  }

  public present(): any {
    return new Promise(function(resolve: Function): void {
       resolve();
    });
  }
};

export class FormMock {
  public register(): any {
    return true;
  }
};

export class StorageMock {

  public _data = {};

  public get(type): any {
    return new Promise(function(resolve: Function): void {
      if (type === 'ceps') {
        resolve({ keys: ['04477100'] });
      }
      if (type === '04477100') {
        resolve('{"cep":"04477100","state":"SP","city":"São Paulo","neighborhood":"Eldorado","street":"Rua Padre Ramon Ortiz"}');
      }
    });
  }

  public remove(key): any {
    return new Promise(function(resolve: Function): void {
       resolve();
    });
  }
};

export class DeepLinkerMock {
  initNav() { }
  createUrl() {}
};

export class NavMock {
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something'
      }
    };
  }

  public setRoot(): any {
    return true;
  }

  public registerChildNav(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public unregisterChildNav(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public popToRoot(): any {
    return true;
  }

  public canGoBack(): any {
    return true;
  }

};

export class PlatformMock {

  public ready(): Promise<{String}> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }

  getQueryParam(key: string): any {
    return key;
  }
};

export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
};

export let addressMock = {
   street: 'Avenida Paulista'
};

export class AppVersionMock {

  version = 20;

  getVersionNumber(): any {
    return new Promise( (resolve, reject) => {
      resolve(this.version);
    });
  }
};
