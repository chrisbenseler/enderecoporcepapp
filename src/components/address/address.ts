import { Component, Input, Output, EventEmitter } from '@angular/core';

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
