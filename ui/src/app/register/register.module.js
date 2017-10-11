import registerComponent from './register.component.js'
import registerService from './register.service.js'

export default
    angular
        .module('flight.register', [])
        .component('flightRegister', registerComponent)
        .service('$register', registerService)
        .name