/*@ngInject*/
class TripsListSrvice {
    
        constructor($http, apiUrl, $state){
            this.$http = $http;
            this.apiUrl = apiUrl;
            this.sorryStyle = false;
            this.nothingStyle = false;
            this.$state = $state;
        }

        /**
         * Get flights history for signed in client
         */
        getMyFlightsHistory() {
            return this.$http
            .get(`${this.apiUrl}/users/mytrips/`+sessionStorage.getItem('login'));
        }

        /**
         * Book a new trip for signed in client
         * @param {*} tripArray 
         */
        book(tripArray) {
            this.$http
            .post(`${this.apiUrl}/users/book/` + sessionStorage.getItem('login'), tripArray).then((res)=>{
                alert("Thanks for Booking")
                this.$state.go('main.flights-available')
            });
        }
    }


    
    export default TripsListSrvice