/*
This file is the entry point of Angular application.
There are all depedencies (module)
*/
((app) => {
  'use strict'
})(require('angular').module('app', [
  require('angular-ui-router'),
  require('angular-cookies'),
  'app.config',
  'app.services',
  'app.common',
  'app.blog'
]))
