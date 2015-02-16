// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:
      .state('tab.tools', {
          url: '/tools',
          views: {
              'tab-tools': {
                  templateUrl: 'templates/tab-tools.html',
                  controller: 'toolsCtrl'
              }
          }
      })



    .state('tab.HOME', {
      url: '/HOME',
      views: {
        'tab-HOME': {
          templateUrl: 'templates/tab-HOME.html',
          controller: 'HOMECtrl'
        }
      }
    })


      .state('tab.About_Us', {
          url: '/About_Us',
          views: {
              'tab-About_Us': {
                  templateUrl: 'templates/tab-About_Us.html',
                  controller: 'About_UsCtrl'
              }
          }
      })





      .state('tab.emergency_links', {
          url: '/emergency_links',
          views: {
              'tab-tools': {
                  templateUrl: 'templates/tabs-emergency.html',
                  controller: 'emergency_linksCtrl'
              }
          }
      })


      .state('tab.Survey', {
          url: '/Survey',
          views: {
              'tab-tools': {
                  templateUrl: 'templates/tabs-Survey.html',
                  controller: 'SurveyCtrl'
              }
          }
      })




      .state('tab.Attractions', {
          url: '/Attractions',
          views: {
              'tab-HOME': {
                  templateUrl: 'templates/tabs-Attractions.html',
                  controller: 'AttractionsCtrl'
              }
          }
      })



      .state('tab.Hotels', {
          url: '/Hotels',
          views: {
              'tab-HOME': {
                  templateUrl: 'templates/tabs-Hotels.html',
                  controller: 'HotelsCtrl'
              }
          }
      })




      .state('tab.Shopping', {
          url: '/Shopping',
          views: {
              'tab-HOME': {
                  templateUrl: 'templates/tabs-Shopping.html',
                  controller: 'ShoppingCtrl'
              }
          }
      })

      .state('tab.abudhabi', {
          url: '/abudhabi',
          views: {
              'tab-HOME': {
                  templateUrl: 'templates/tabs-abudhabi.html',
                  controller: 'abudhabiCtrl'
              }
          }
      })

      .state('tab.dubai', {
          url: '/dubai',
          views: {
              'tab-HOME': {
                  templateUrl: 'templates/tabs-dubai.html',
                  controller: 'dubaiCtrl'
              }
          }
      })

      .state('tab.shj', {
          url: '/shj',
          views: {
              'tab-HOME': {
                  templateUrl: 'templates/tabs-shj.html',
                  controller: 'shjCtrl'
              }
          }
      })

      .state('tab.ajman',{
          url: '/ajman',
          views: {
              'tab-HOME':{
                  templateUrl: 'templates/tabs-ajman.html',
                  controller: 'ajmanCtrl'
              }

          }
      })


      .state ( 'tab.Am',{
          url: '/Am',
          views: {
              'tab-HOME':{
                  templateUrl:'templates/tabs-Am.html',
                  controller:'AmCtrl'
              }
          }
      }

  )

      .state('tab.RAK',{
            url:'/RAK',
          views:{
              'tab-HOME':{
                  templateUrl: 'templates/tabs-RAK.html',
                  controller: 'RAKCtrl'
              }


          }
        })

      .state ('tab.fuj',{
      url:'/fuj',
      views: {
          'tab-HOME': {
              templateUrl: 'templates/tabs-fuj.html',
              controller: 'fujCtrl'
          }
      }
  })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/HOME');

});

