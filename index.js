const express = require('express')

const app = express()
const port = 3000


app.use(express.json());
var router = express.Router();

var authController = require('./controller/authController');


app.get('/auth/sign', authController.auth_sign)
app.post('/auth/verify', authController.auth_verify)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})