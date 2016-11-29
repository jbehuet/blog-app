/*
Create Angular component blogListMenu into module app.blog
*/
((app) => {
    'use strict'
    app.component('blogListMenu', {
        templateUrl: 'js/components/blog/blogList/blogListMenu.html',
        controller: ['UsersService', '$state', function(UsersService, $state){
          angular.extend(this, {
              $onInit(){
                UsersService.getCurrent().then((user) => {
                  this.user = user
                }).catch((err)=>{

                })
              },
              disconnect(){
                UsersService.disconnect().then(()=>{
                  Materialize.toast('Disconnected', 4000, 'toast-warning')
                  this.user = null
                  $state.reload()
                })
              }
          })
        }]
    })
})(require('angular').module('app.blog'))
