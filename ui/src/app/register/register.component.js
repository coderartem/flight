import templateUrl from './register.template.html'

/* @ngInject */
class RegisterController {

    constructor ($register) {
        this.$register = $register;

    }

}


export default {
    templateUrl,
    controller: RegisterController,
    controllerAs: '$registerCtrl'
}
