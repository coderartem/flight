/*@ngInject*/
class FlightsListSrvice {
    
        constructor($http, apiUrl){
            this.$http = $http;
            this.apiUrl = apiUrl;
    
        }
    
        /**
         * Get all available for today flights
         */
        getAvailableFilights(){
            return this.$http
            .get(`${this.apiUrl}/flights`)
        }

    }


    
    export default FlightsListSrvice