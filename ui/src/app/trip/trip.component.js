import templateUrl from './trip.template.html'

/* @ngInject*/
class TripController {

    constructor ($state, $map, locations) {
        // this.$state = $state;
        // this.$map = $map;
        // this.locations = locations;
        // this.bookStyle = $state.current.name==='main.flights-available'?true:false;
    }

    // draw(origin,destination){
    //     this.$map.paths = [];
        
    //     this.$map.origin = this.locations[origin.toLowerCase()];
    //     this.$map.destination = this.locations[destination.toLowerCase()];
    //     this.$map.paths.push([this.$map.origin,this.$map.destination, '#FF3388']);
    //     this.$state.reload();
    // }
}
export default {
    templateUrl,
    controller: TripController,
    controllerAs: '$tripCtrl',
    bindings: {
        lol: '='
    }
}