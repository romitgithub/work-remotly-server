var express = require('express')
var bodyParser = require('body-parser');
var request = require('request');
var cheerio = require('cheerio');

var router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

//var Company = require('./Company');

var limit = 12;

//inserts a new company info

router.post('/', function(req, res){

//	var company = new Company({
//		name: req.body.name,
//		website: req.body.website,
//		location: req.body.location,
//		country: req.body.country,
//		logo: req.body.logo,
//		careersPage: req.body.careersPage,
//		timestamp: Date.now()
//	});

//	company.save(function(err, data){
//		if(err)
//			res.status(500).send("Internal server error");
//		res.status(200).send(data);
//	})
})

router.get('/', function(req, res){

	var page = req.query.page || 1;
	console.log(page);
	Company.find({}, {}, {skip: (page - 1) * limit, limit: limit, sort: ['name']}, function(err, data){
		if(err)
			res.status(500).send("Internal server error");
		res.status(200).send({list: data, currentPage: page});
	})
})

router.post('/scrape', function(req, res){

	var url = req.body.url;
	
	if(url != null && url != ""){

		request(url, function(error, response, html){

        // First we'll check to make sure no errors occurred when making the request

	        if(error)
	        	res.status(500).send("Internal server error");
	        else {
	        	// Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

	            var $ = cheerio.load(html);

	            // Finally, we'll define the variables we're going to capture

	            var name, website, logo, location, country, careersPage;
	            var json = { name : "", website : "", logo : "", location: "", country: "", careersPage: ""};

	            json.name = $('title').text();
	            json.website = url;
	            json.logo = 

	            res.status(200).send(json);
	        }
	    })
	}
})

module.exports = router;
