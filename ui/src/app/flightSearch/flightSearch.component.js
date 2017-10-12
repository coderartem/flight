import templateUrl from './flightSearch.template.html'

/* @ngInject */
class SearchController {

    cities = [];

    constructor ($flightSearch) {

        this.$flightSearch = $flightSearch;

        /**
         * Getting all cities available from database for trip search <select> elements (dropdown menues)
         */
        $flightSearch.getAllCities()
        .then(cit => {
        this.cities = cit;
    })
}

}

export default {
    templateUrl,
    controller: SearchController,
    controllerAs: '$srchCtrl',
    bindings: {
        resolveCities: '='
    }
}