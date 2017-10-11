import templateUrl from './app.template.html'

/* @ngInject */
class AppController {
  constructor ($log) {
    $log.debug('AppController is a go.');
    
  }

  

}

export default {
  templateUrl,
  controller: AppController,
  controllerAs: '$appCtrl'
}
