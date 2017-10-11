/* @ngInject */
class MapService {
  paths=[]
  constructor ($http, apiUrl, locations) {
    this.$http = $http
    this.apiUrl = apiUrl


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
