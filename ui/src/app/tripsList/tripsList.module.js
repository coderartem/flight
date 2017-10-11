import tripsListComponent from './tripsList.component.js'
import tripsListService from './tripsList.service.js'

 import trip from '../trip/trip.module'

export default 
    angular
        .module('tripsList',[trip])
        .component('tripsList',tripsListComponent)
        .service('$trips', tripsListService)
        .name