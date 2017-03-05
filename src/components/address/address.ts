import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
  Generated class for the Address component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'addressdata',
  templateUrl: 'address.html'
})
export class AddressComponent {

  @Input() data: any = {};

  @Output() address_click = new EventEmitter();

  constructor() {
        
  }

  click() {
  	this.address_click.emit(this.data);
  }

}
