import templateUrl from './app.template.html'

/* @ngInject */
class AppController {
  constructor ($log, $interval, $state) {
    $log.debug('AppController is a go.');
    
    this.username = sessionStorage.getItem('login');
  
    $interval(()=>{$state.reload('.flights-available')},15000);
  }
  

}

export default {
  templateUrl,
  controller: AppController,
  controllerAs: '$appCtrl'
}
