import templateUrl from './app.template.html'

/* @ngInject */
class AppController {
  constructor ($log) {
    $log.debug('AppController is a go.');
    
    this.username = sessionStorage.getItem('login');
  
  }


  

}

export default {
  templateUrl,
  controller: AppController,
  controllerAs: '$appCtrl'
}
