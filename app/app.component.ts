import { Component } from '@angular/core';

@Component({
    moduleId: module.id.replace('dist/', ''),
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls:  [ 'app.component.css' ]
})
export class AppComponent {
  
  heading = 'Ultra Racing Schedule';
  
}