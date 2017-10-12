//script with core site functionality

$(document).ready(function () {
    
    //for debug only we will print the following requests to the console
    var loader = new RssLoader();

    loader.printRssToConsole("http://fliplet.com/feed");
    loader.printRssToConsole("http://feeds.feedburner.com/TechCrunch/ ");
    loader.printRssToConsole("http://feeds.bbci.co.uk/news/rss.xml");

});