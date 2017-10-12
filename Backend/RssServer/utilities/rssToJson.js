//this module contains the utility functions to query the rss as json service apis
var request = require('request');

var exports = module.exports = {};

const api_key = 'jtifrnuw5ib7b59fo2lep1hvvqp7ht6gvpbft4ua';

const api_url = 'https://api.rss2json.com/v1/api.json?api_key=' + api_key;

/* Use the RssToJSON api to convert the rss feed into json. */
exports.getRssAsJson = function(url, callback){

    var options = {
        url: api_url + "&rss_url=" + url,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };

    request(options, function (error, response, body) {
       
        if(error)
            callback(error);
        else
        {
            try {

              callback(null,JSON.parse(body));

            } catch (e) {

                //the result is not a valid json string, return the error
                callback(e);
            }
        }
            
      
    });

}