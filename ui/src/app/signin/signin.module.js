import signinComponent from './signin.component.js'
import signinService from './signin.service.js'

export default
    angular
        .module('flight.signin',[])
        .component('flightSignin', signinComponent)
        .service('$signin', signinService)
        .name