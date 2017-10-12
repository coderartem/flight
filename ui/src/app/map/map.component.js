import templateUrl from './map.template.html'

/* @ngInject */
class MapController {
  zoom = 7;
  center = [35.5175, -86.5804];
  markers = [];
  paths = [];

  customMarkers = [];
  stopCitiesMarks = [];

  constructor ($map, locations) {
    this.$map = $map

    // add markers from an angular constant
    // const { memphis, nashville, knoxville } = locations
    //const markers = [memphis, nashville, knoxville]

    //markers.forEach(marker => this.addMarker(marker))

    // add paths manually
    // const paths = [
    //   [memphis, nashville, '#CC0099'],
    //   [nashville, knoxville, '#AA1100']
    // ]

    // paths.forEach(args => this.addPath(...args))

    // add path from webservice
    // $map.getMarkerByCityName('Chattanooga')
    //   .then(chattanooga => {
    //     this.addPath(knoxville, chattanooga, '#FF3388')
    //   })
    const paths = $map.paths;
    paths.forEach(args => this.addPath(...args));
    this.addMarker($map.destination);
    //this.addPath($map.origin, $map.destination, '#FF3388');

    paths.forEach(a => {
      let latitude = a[0].latitude-(a[0].latitude-a[1].latitude)/2;
      let longitude = a[0].longitude-(a[0].longitude-a[1].longitude)/2;
      this.addCustomMarkers({latitude,longitude})
    })

    for(let i=0; i<paths.length-1;i++){
      this.addStopCitiesMarks(paths[i][1]);
      console.log(paths[i][1])
    }

  }

  addMarker ({ latitude, longitude }) {
    this.markers.push({
      position: `[${latitude}, ${longitude}]`
    })
  }
/**
 * Custom markers for flights paths with flight duration
 * @param {*} param0 
 */
  addCustomMarkers ({ latitude, longitude }) {
    this.customMarkers.push({
      position: `[${latitude}, ${longitude}]`
    })
  }

  /**
   * Custom markers for cities on the way with layover time there
   * @param {*} city 
   */
  addStopCitiesMarks (city) {
    this.stopCitiesMarks.push({
      position: `[${city.latitude}, ${city.longitude}]`
    })
  }

  addPath (a, b, color) {
    this.paths.push({
      path: `[[${a.latitude}, ${a.longitude}], [${b.latitude}, ${b.longitude}]]`,
      strokeColor: color,
      strokeOpacity: 1.0,
      strokeWeight: 3,
      geodesic: true
    })
  }

}

export default {
  templateUrl,
  controller: MapController,
  controllerAs: '$mapCtrl'
}
