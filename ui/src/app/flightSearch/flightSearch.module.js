import flightSearchComponent from './flightSearch.component.js'
import flightSearchService from './flightSearch.service.js'


export default 
    angular
        .module('flight.search',[])
        .component('flightSearch', flightSearchComponent)
        .service('$flightSearch', flightSearchService)
        .name