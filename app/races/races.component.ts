import { Component } from '@angular/core';

import { Race } from './race';
// import { RACES } from './mocks';

import { DataProvider } from '../data.provider';

@Component({
    moduleId: module.id.replace('dist/', ''),
    selector: 'races',
    templateUrl: 'races.component.html',
    styleUrls: [ 'races.component.css' ]
})
export class RacesComponent {

  constructor(private dataProvider: DataProvider) {}

  races: Race[];
  cash: number;

  ngOnInit() {
    this.dataProvider.getRaces()
      .subscribe(races => this.races = races);
    this.cash = 300;
  }

  totalTickets() {

    if (Array.isArray(this.races)) {

      return this.races
        .reduce((total, race) => race.isRacing === true ? total + race.entryFee : total, 0);

    }

    // if (Array.isArray(this.races)) {
    //
    //   let total = 0;
    //
    //   for (let race of this.races) {
    //     if (race.isRacing === true) total += race.entryFee;
    //   }
    //
    //   return total;
    //
    // }

  }

  cashLeft() {
    return this.cash - this.totalTickets();
  }

  enterRace(race: Race) {

    if (this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert(`You don't have enough cash`);
    }

  }

  cancelRace(race: Race) {
    race.isRacing = false;
  }

}
