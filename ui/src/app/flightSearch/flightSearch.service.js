/* @ngInject */
class FlightSearchService {

    constructor ($http, apiUrl) {
        this.$http = $http;
        this.apiUrl = apiUrl;
    }

    /**
     * Get all cities from database
     */
    getAllCities() {
        return this.$http
        .get(`${this.apiUrl}/location`)
        .then(result => result.data)
    }

    /**
     * Get all possible routes from origin to destination from server
     * @param {*} origin 
     * @param {*} destination 
     */
    routeSearch(origin, destination){
        return this.$http
        .get(`${this.apiUrl}/flights/origin/`+origin+`/destination/`+destination)
        .then((res) => {
            return res;
        })
    }
}

export default FlightSearchService