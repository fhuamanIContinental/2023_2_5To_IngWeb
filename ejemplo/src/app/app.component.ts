import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'ejemplo';


/*

  let mivariable
  10 mivariable ==> texto
  50 mivariable ==> numero
  100 mivariable ==> objeto
  300 mivariable ==> array

*/

/**
 * title = 500; ===> ERROR: no se puede asignar un valor númerico a una variable de tipo texto
 */



}
