/* @ngInject */
class FlightSearchService {

    constructor ($http, apiUrl) {
        this.$http = $http;
        this.apiUrl = apiUrl;
    }

    getAllCities() {
        return this.$http
        .get(`${this.apiUrl}/location`)
        .then(result => result.data)
    }

    routeSearch(origin, destination){
        return this.$http
        .get(`${this.apiUrl}/flights/origin/`+origin+`/destination/`+destination)
        .then((res) => {
            return res;
        })
    }
}

export default FlightSearchService