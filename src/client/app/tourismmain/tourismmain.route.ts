namespace app.tourismmain {
  'use strict';

  angular
    .module('app.tourismmain')
    .config(configureStates);

  configureStates.$inject = ['$stateProvider'];
  /* @ngInject */
  function configureStates($stateProvider: ng.ui.IStateProvider) {
    var states = getStates();
    states.forEach(function(state) {
      $stateProvider.state(state.state, state.config);
    });
  }

  function getStates() {
    return [
      {
        state: 'tourismmain',
        config: {
          url: '/',
          templateUrl: 'app/tourismmain/tourismmain.html',
          controller: 'TourismmainController',
          controllerAs: 'vm',
          title: 'tourism',
          settings: {
            nav: 1,
            content: '<i class="fa fa-plane"></i> Tourism'
          }
        }
      }
    ];
  }
}
