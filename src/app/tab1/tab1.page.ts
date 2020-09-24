import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {

  let numero = 20;
  debugger;

  numero = 10

    console.log('Hola Mundo' + numero);
  }

}
