/*
Create Angular component blogListMenu into module app.blog
*/
((app) => {
    'use strict'
    app.component('blogListMenu', {
        templateUrl: 'js/components/blog/blogList/blogListMenu.html',
        controller: ['UsersService', function(UsersService){
          angular.extend(this, {
              $onInit(){
                UsersService.getCurrent().then((user) => {
                  this.user = user
                }).catch((err)=>{

                })
              }
          })
        }]
    })
})(require('angular').module('app.blog'))
