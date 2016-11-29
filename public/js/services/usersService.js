((app) => {
    'use strict'
    app.service('UsersService', ['$http', '$cookies', '$window', '$q', class UsersService {

        constructor($http, $cookies, $window, $q) {
            this.$http = $http
            this.$cookies = $cookies
            this.$window = $window
            this.$q = $q
            this.currentUser = null
        }

        connect(data) {
            return new Promise((resolve, reject) => {
                this.$http.get('/api/auth/facebook', data).then((res) => {
                    resolve(res.data)
                }).catch(() => {
                    reject()
                })
            })
        }

        disconnect() {
            return new Promise((resolve, reject) => {
                this.$cookies.remove("token")
                this.currentUser = null
                resolve()
            })
        }

        setToken(token) {
            return new Promise((resolve, reject) => {
                this.$cookies.put('token', token)
                let payload = token.split('.')[1]
                payload = this._decode_payload(payload)
                this.currentUser = payload._doc
                resolve()
            })
        }

        getCurrent() {
            let deferred = this.$q.defer()
            if (!this.$cookies.get('token')) {
                deferred.reject()
            } else {
                if (!this.currentUser) {
                    let payload = this.$cookies.get('token').split('.')[1]
                    payload = this._decode_payload(payload)
                    this.currentUser = payload._doc
                    if (Math.round(new Date().getTime() / 1000) > payload.exp)
                        return this.disconnect()
                }
                deferred.resolve(this.currentUser)
            }

            return deferred.promise
        }

        _decode_payload(payload) {
            return JSON.parse(decodeURI(this.b64_to_utf8(this.url_base64_decode(payload))))
        }

        b64_to_utf8(str) {
            return decodeURIComponent(escape(window.atob(str)));
        }

        url_base64_decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            //return window.atob(output); //polifyll https://github.com/davidchambers/Base64.js
            return output
        }

    }])
})(angular.module('app.services'))
