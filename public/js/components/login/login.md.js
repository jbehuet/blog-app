((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('app.login', {
                url: '/login',
                template: '<login></login>'
            })
    }])
})(require('angular').module('app.login', []))
