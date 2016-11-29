/*
Create Angular component blogItemMenu into module app.blog with databindings properties
- editMode : boolean to indicate if blogItem is in editMode or not
- onUndo : function
- onEdit : function
- onDelete : function
- onSave : function
*/
((app) => {
    'use strict'
    app.component('blogItemMenu', {
        bindings: {
            editMode: "=",
            onUndo: "&",
            onEdit: "&",
            onDelete: "&",
            onSave: "&"
        },
        templateUrl: 'js/components/blog/blogItem/blogItemMenu.html',
        controller: ['UsersService', function(UsersService) {
            angular.extend(this, {
                $onInit() {
                    UsersService.getCurrent().then((user) => {
                        this.user = user
                    }).catch((err) => {

                    })
                }
            })
        }]
    })
})(require('angular').module('app.blog'))
