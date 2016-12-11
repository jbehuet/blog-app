((app) => {
    'use strict'
    app.component('login', {
        templateUrl: 'js/components/login/login.html',
        controller: ['UsersService', '$state', function(UsersService, $state) {
            let $ctrl = this
            angular.extend(this, {
                connect() {
                    UsersService.connect($ctrl.user).then((user) => {
                        let toastContent = `Welcome ${user.name} !`
                        Materialize.toast(toastContent, 4000, 'toast-success')
                        $state.go('blog.list')
                    })
                }
            })
        }]
    })
})(require('angular').module('app.login'))
