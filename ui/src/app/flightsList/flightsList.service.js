/*@ngInject*/
class FlightsListSrvice {
    
        constructor($http, apiUrl){
            this.$http = $http;
            this.apiUrl = apiUrl;
    
        }
    
        getAvailableFilights(){
            return this.$http
            .get(`${this.apiUrl}/flights`)
        }

        getMyFlightsHistory(){
            return 

        }
    }


    
    export default FlightsListSrvice