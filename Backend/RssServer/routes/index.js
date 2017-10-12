var express = require('express');
var rssToJson = require('../utilities/rssToJson');
var urlUtilities = require('../utilities/urlUtilities');

var router = express.Router();

/* Cross Origin middleware */
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET the rss feed as json */
router.get('/showRss', function (req, res, next) {
  
  try {
    
    var url = req.query.rss_url;

    if (url) {

      //check if the url is valid, if not throw an exception
      if(!urlUtilities.validURL(url))
       throw 'The Url is not valid';
    
      //query the rss to json service
      rssToJson.getRssAsJson(url, function (error, data) {

        if (error)
        {
          res.status(500).send(error);
        }       
        else
          res.send(data);

      });
    }
    else
      res.status(204).send("");

  } catch (ex) {
    res.status(500).send(ex);
  }

});

module.exports = router;
