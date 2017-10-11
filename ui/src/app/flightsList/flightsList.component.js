import templateUrl from './flightsList.template.html'

/*@ngInject */
class FlightsListController {

    constructor ($flights) {
        this.$flights = $flights;
    }
}

export default {
    templateUrl,
    controller: FlightsListController,
    controllerAs: '$listCtrl',
    bindings: {
        resolvedFlightsList: '='
    }
}