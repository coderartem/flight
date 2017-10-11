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
        }
        this.$state.reload();
    }

    book(tripArray){
        this.$trips.book(tripArray);
    }

    flightTime(tripArray){
        let t=0;
        for(let i=0; i<tripArray.length; i++){
            t+=tripArray[i].flightTime;
        }
        return t;
    }

    stops(tripArray){
        let s=-1;
        for(let i=0; i<tripArray.length; i++){
            s++;
        }
        return s;
    }

    offsetTime(tripArray){
        let o=0;
        for(let i=0; i<tripArray.length; i++){
            o+=tripArray[i].offset;
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