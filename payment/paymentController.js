var express = require('express')
var bodyParser = require('body-parser');
var request = require('request');

var router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', function(req, res){

	var headers = { 'X-Api-Key': 'e0b5bed990578e8d01c5d780f2f7362e', 'X-Auth-Token': '36d045ce13cf48a77239886ec8e47b02'}
	
	var payload = {
	  purpose: req.body.purpose,
	  amount: req.body.amount,
	  phone: req.body.phone,
	  buyer_name: req.body.buyer_name,
	  redirect_url: req.body.redirect_url,
	  send_email: req.body.send_email,
	  webhook: req.body.webhook,
	  send_sms: req.body.send_sms,
	  email: req.body.email,
	  allow_repeated_payments: req.body.allow_repeated_payments
	}

	request.post('https://www.instamojo.com/api/1.1/payment-requests/', {form: payload,  headers: headers}, function(error, response, body){
	  if(!error && response.statusCode == 201){
	    console.log(body);
	    res.status(200).send({ data: JSON.stringify(body)});
	  }
	  else{
	  	res.status(500).send({ success: false});
	  }
	})
});

module.exports = router;