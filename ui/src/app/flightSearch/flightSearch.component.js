import templateUrl from './flightSearch.template.html'

/* @ngInject */
class SearchController {

    cities = [];

    constructor ($flightSearch) {

        this.$flightSearch = $flightSearch;

        $flightSearch.getAllCities()
        .then(cit => {
        this.cities = cit;
    })
}

}

export default {
    templateUrl,
    controller: SearchController,
    controllerAs: '$srchCtrl'
}