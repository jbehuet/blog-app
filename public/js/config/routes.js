/*
Create Angular config in app.config module
*/
((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        // Define prefix
        $locationProvider.hashPrefix('!')
            // For each url not found redirection to '/'
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('callback', {
                url: '/auth/callback/:token',
                template: '',
                controller: ['UsersService', '$stateParams', '$state', function(UsersService, $stateParams, $state) {
                    if ($stateParams.token) {
                        UsersService.setToken($stateParams.token).then(() => {
                            $state.go('blog.list')
                        })
                    } else {
                        $state.go('blog.list')
                    }
                }]
            })
    }])
})(require('angular').module('app.config'))
