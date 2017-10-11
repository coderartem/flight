import flightMap from './map/map.module'
import apiUrl from './api.url'
import appComponent from './app.component.js'

import config from './config.js'

import flightSignin from './signin/signin.module'
import flightRegister from './register/register.module'
import flightSearch from './flightSearch/flightSearch.module'
import flightsList from './flightsList/flightsList.module'
import tripsList from './tripsList/tripsList.module'

export default
  angular
    .module('flight', [
      'ngAria',
      'ngAnimate',
      'ngMaterial',
      'ngMessages',
      'ui.router',

      flightMap,
      flightSignin,
      flightRegister,
      flightSearch,
      flightsList,
      tripsList
    ])
    .constant('apiUrl', apiUrl)
    .component('flightApp', appComponent)
    .config(config)
    .name
