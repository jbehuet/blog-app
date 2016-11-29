'use strict'
let UsersController = require('../controllers/UsersController')

module.exports = (app, passport) => {

    let ctrl = new UsersController()

    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: 'email'
    }))

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback', passport.authenticate('facebook'), (req, res, next) => {
        return ctrl.authenticate(req, res, next)
    })
}
