var mongoose = require('mongoose');
var companySchema = new mongoose.Schema({
	name: String,
	website: String,
	location: String,
	country: String,
	logo: String,
	careersPage: String
})

mongoose.model('Company', companySchema, 'companies');

module.exports = mongoose.model('Company')