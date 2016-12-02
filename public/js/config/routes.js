/*
Create Angular config in app.config module
*/
((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        // Define prefix
        $locationProvider.hashPrefix('!');
        // For each url not found redirection to '/'
        $urlRouterProvider.otherwise('/posts/');
        /*
          Define a state with name 'app' this state is abstract and url is empty (root of application)
          template is ui-view it's used to display nested views
        */
        $stateProvider.state('app', {
                url: '',
                abstract: true,
                template: '<ui-view></ui-view>'
            })
            .state('callback', {
                url: '/auth/callback/:token',
                template: '',
                controller: ['UsersService', '$stateParams', '$state', function(UsersService, $stateParams, $state) {
                    if ($stateParams.token) {
                        UsersService.setToken($stateParams.token).then((user) => {
                            let toastContent = `Welcome ${user.facebook.name} !`
                            Materialize.toast(toastContent, 4000, 'toast-success')
                            $state.go('blog.list')
                        })
                    } else {
                        $state.go('blog.list')
                    }
                }]
            })
    }])
})(require('angular').module('app.config'))
