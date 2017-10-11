import templateUrl from './signin.template.html'

/* @ngInject */
class signinController {

    constructor ($signin){
        this.$signin = $signin;
    }
}


export default {
    templateUrl,
    controller: signinController,
    controllerAs: '$signinCtrl'
}