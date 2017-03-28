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
}
 
export class FormMock {
  public register(): any {
    return true;
  }
}

export class StorageMock {

  public get(type): any {
    return new Promise(function(resolve: Function): void {
      if(type == 'ceps')
        resolve({ keys: ['00000000', '00000001'] })
       if(type == '00000000')
         resolve('{}')
    });
  }

}
 
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
        'model': 'something',
      },
    };
  }
 
  public setRoot(): any {
    return true;
  }
}
 
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
}
 
export class MenuMock {
  public close(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}

export let addressMock = {
	street: "Avenida Paulista"
}

export class AppVersionMock {

  version = 20;

  getVersionNumber(): any {
    return new Promise( (resolve, reject) => {
      resolve(this.version)
    });
  }
}