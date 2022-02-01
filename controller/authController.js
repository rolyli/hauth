var jwt = require('jsonwebtoken');
// var Author = require('../models/author');

// temp secret change later
let secret = 'secret'

// temporary private key change later
exports.auth_sign = (req, res) => {
    // check against user database for username and password
    // if user exists send jwt token

    let token = jwt.sign({ user: 'test_user' }, secret);
    res.send(token);
}

// temporary private key change later
exports.auth_verify = (req, res) => {
    let token = req.body.token
    if (typeof token == 'undefined')    {
        res.send("Error: empty token");
        return;
    }

    let decoded = undefined;
    let verify = true;
    
    try {
        decoded = jwt.verify(token, secret);
    } catch(err) {
        verify = false;
    }
      
    let response = {
        verify,
        token,
        decoded
    }
    res.send(response);
}
