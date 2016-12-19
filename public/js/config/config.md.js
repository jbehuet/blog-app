/*
Create app.config module
*/
import routes from './routes'
import http from './http'

let configModule = angular.module('app.config', [])
    .config(routes)
    .config(http)
    .name

export default configModule
