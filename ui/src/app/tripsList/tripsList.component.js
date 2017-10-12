import templateUrl from './tripsList.template.html'

/*@ngInject */
class TripsListController {

    colorsArray = ['#FF3388', '#373983','#36C928']
    constructor ($trips, $map, locations, $state) {
        this.$trips = $trips;
        this.$map = $map;
        this.locations = locations;
        this.$state = $state;
        this.myStyle =$state.current.name==='main.route-search'?true:false;
        this.routessStyle = (this.$state.current.name === 'main.route-search');
        this.historyStyle = (this.$state.current.name === 'main.flights-history');
         
    }

    /**
     * Background color of trip based on if element in ng-repeat even or odd
     * @param {*} index 
     */
    bck(index){
        let c = index%2===0?'"rgb(197, 200, 208)"':'"rgb(224, 224, 224)"'
        return '{"background-color":'+c+'}';
    }

    /**
     * Draw possible trip or trip from history with all markers on the map
     * @param {*} tripArray 
     */
    drawTrip(tripArray){
        this.$map.paths =[];
        for(let i=0; i<tripArray.length; i++){
            this.$map.paths.push([
                this.locations[tripArray[i].origin.toLowerCase()],
                this.locations[tripArray[i].destination.toLowerCase()], 
                this.colorsArray[i]
            ])
            if(i===tripArray.length-1){
                this.$map.destination = this.locations[tripArray[i].destination.toLowerCase()]
            }
            if(i!=0){
                this.$map.layover[i-1] = this.offsetTime([tripArray[i-1],tripArray[i]]);
            }
            this.$map.flightTime[i] = tripArray[i].flightTime;
        }
        this.$state.reload('main');
    }

    /**
     * Book flight
     * @param {*} tripArray 
     */
    book(tripArray){
        this.$trips.book(tripArray);
    }

    /**
     * Calculation of total flight time for trip element
     * @param {*} tripArray 
     */
    flightTime(tripArray){
        let t=0;
        tripArray.forEach(elem => t+=elem.flightTime);
        return t;
    }

    /**
     * Calculation of number of stops for trip element
     * @param {*} tripArray 
     */
    stops(tripArray){
        let s=-1;
        tripArray.forEach(elem => s++);
        return s;
    }

    /**
     * Calculation total time at airport between flights on the trip
     * @param {*} tripArray 
     */
    offsetTime(tripArray){
        let o=0;
        for(let i=1; i<tripArray.length; i++){
            o+=tripArray[i].offset-tripArray[i-1].offset-tripArray[i-1].flightTime;
        }
        return o;
    }
}

export default {
    templateUrl,
    controller: TripsListController,
    controllerAs: '$tripsCtrl',
    bindings: {
        resolvedTripssList: '='
    }
}