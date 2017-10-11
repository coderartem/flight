import flightsListComponent from './flightsList.component.js'
import flightsListService from './flightsList.service.js'

import flightTrip from '../flight/flight.module'

export default 
    angular
        .module('flightsList',[flightTrip])
        .component('flightsList',flightsListComponent)
        .service('$flights', flightsListService)
        .name