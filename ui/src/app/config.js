export default

['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $transition$){
    
          $urlRouterProvider.otherwise('signin');
    
          var mainState = {
            name: 'main',
            url: '/main',
            component: 'flightApp',
          }
    
          var signinState = {
            name: 'signin',
            url: '/signin',
            component: 'flightSignin',
            onEnter: ['$signin', function ($signin){
              sessionStorage.clear();
            }]
          }
    
          var verifyState = {
            name: 'verify',
            url: '/verify',
            redirectTo: (transition) => {
              let svc = transition.injector().get('$signin');
              return svc.verifyUser().then((result) => {
                return result.data? 'main.flights-available':'signin';
              })
            }
          }
    
          var registerState = {
            name: 'register',
            url: '/register',
            component: 'flightRegister'
          }
    
          var userCreationState = {
            name: 'userCreate',
            url: '/creating',
            redirectTo: (transition) => {
              return transition.injector().get('$register').createNewUser()
              .then((result) => {
                return result?'main.flights-available':'register';
              });
            }
          }
    
          var availableFlightsState = {
            name: 'main.flights-available',
            url: '/available-flights',
            component: 'flightsList',
            resolve: {
              resolvedFlightsList: ['$flights', function($flights){
                return $flights.getAvailableFilights();
              }]
            }
          }
    
          
    
          var myFlightsHistoryState = {
            name: 'main.flights-history',
            url: '/flights-history',
            component: 'tripsList',
            resolve: {
              resolvedTripssList: ['$trips', function($trips){
                return $trips.getMyFlightsHistory();
              }]
            }
          }
    
          var routeSearchState = {
            name: 'main.route-search',
            url: '/route-search/from/{origin}/to/{destination}',
            component: 'tripsList',
            resolve: {
              resolvedTripssList: ['$flightSearch', '$transition$', '$trips', function($flightSearch, $transition$, $trips){
                return $flightSearch.routeSearch($transition$.params().origin, $transition$.params().destination)
                .then((res)=>{
                  $trips.sorryStyle = res.data.length===0?true:false;
                  return res;
                })
              }]
            }
          }
    
          $stateProvider.state(routeSearchState);
          $stateProvider.state(myFlightsHistoryState);
          $stateProvider.state(availableFlightsState);
          $stateProvider.state(userCreationState);
          $stateProvider.state(verifyState);
          $stateProvider.state(registerState);
          $stateProvider.state(mainState);
          $stateProvider.state(signinState);
        }]