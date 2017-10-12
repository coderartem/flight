/* @ngInject */
class MapService {
  paths=[];
  allCities = {};
  flightTime = [];
  layover = [];
  constructor ($http, apiUrl, locations, $state) {
    this.$http = $http;
    this.apiUrl = apiUrl;
    this.$state = $state;


    this.origin = locations['knoxville'];
    this.destination = locations['nashville'];
    this.paths.push([this.origin, this.destination, '#FF3388']);
  }



  getMarkerByCityName (name) {
    return this.$http
      .get(`${this.apiUrl}/location/name`, { params: { name } })
      .then(result => result.data)
  }

}

export default MapService
