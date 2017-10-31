var express = require('express');
var app = express();
var db = require('./db')

var userController = require('./user/userController');
var companyController = require('./companies/companyController');
app.use('/companies', companyController);

module.exports = app;