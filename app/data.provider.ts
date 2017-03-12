import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import { RACES } from './races/mocks';
import { Race } from './races/race';

@Injectable()
export class DataProvider {
  
  constructor(private http: Http) {}
  
  getRaces() {
    
    // return RACES;
    
    return this.http.get('app/races/races.json')
      .map(response => <Race[]> response.json().data);
      
  }
  
}