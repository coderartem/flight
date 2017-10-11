import templateUrl from './trip.template.html'

/* @ngInject*/
class TripController {

    constructor () {
    }

}
export default {
    templateUrl,
    controller: TripController,
    controllerAs: '$tripCtrl',
    bindings: {
        lol: '='
    }
}