import templateUrl from './flight.template.html'

/* @ngInject*/
class FlightController {

    constructor ($state, $map, locations) {
        this.$state = $state;
        this.$map = $map;
        this.locations = locations;
        this.bookStyle = $state.current.name==='main.flights-available'?true:false;
    }


    /**
     * Draw  available route on the map
     * @param {*} origin 
     * @param {*} destination 
     */
    draw(origin,destination){
        this.$map.paths = [];
        
        this.$map.origin = this.locations[origin.toLowerCase()];
        this.$map.destination = this.locations[destination.toLowerCase()];
        this.$map.paths.push([this.$map.origin,this.$map.destination, '#FF3388']);
        this.$state.reload('main');
    }
}
export default {
    templateUrl,
    controller: FlightController,
    controllerAs: '$fltCtrl',
    bindings: {
        trip: '='
    }
}
