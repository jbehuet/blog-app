'use strict'
let Authentification = require('../middlewares/authentification')
let UsersController = require('../controllers/UsersController')

module.exports = (app, passport) => {

    let ctrl = new UsersController()

    app.post('/auth', Authentification.local)

    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: 'email'
    }))

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback', Authentification.facebook(passport), (req, res, next) => {
        return ctrl.authenticate(req, res, next)
    })
}
