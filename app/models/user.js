'use strict'
let mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({
    facebook: {
        id: String,
        token: String,
        name: String,
        email: String,
        photo: String
    },
    bookmarks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }],
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
}))
