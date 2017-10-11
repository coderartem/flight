import tripComponent from './trip.component.js'
import flightTrip from '../flight/flight.module'

export default
    angular
        .module('trip',[flightTrip])
        .component('trip',tripComponent)
        .name