"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_provider_1 = require('../data.provider');
var RacesComponent = (function () {
    function RacesComponent(dataProvider) {
        this.dataProvider = dataProvider;
    }
    RacesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataProvider.getRaces()
            .subscribe(function (races) { return _this.races = races; });
        this.cash = 300;
    };
    RacesComponent.prototype.totalTickets = function () {
        if (Array.isArray(this.races)) {
            return this.races
                .reduce(function (total, race) { return race.isRacing === true ? total + race.entryFee : total; }, 0);
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
    };
    RacesComponent.prototype.cashLeft = function () {
        return this.cash - this.totalTickets();
    };
    RacesComponent.prototype.enterRace = function (race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
        }
        else {
            alert("You don't have enough cash");
        }
    };
    RacesComponent.prototype.cancelRace = function (race) {
        race.isRacing = false;
    };
    RacesComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace('dist/', ''),
            selector: 'races',
            templateUrl: 'races.component.html',
            styleUrls: ['races.component.css']
        }), 
        __metadata('design:paramtypes', [data_provider_1.DataProvider])
    ], RacesComponent);
    return RacesComponent;
}());
exports.RacesComponent = RacesComponent;
//# sourceMappingURL=races.component.js.map