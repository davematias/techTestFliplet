//class responsible for loading rss data from the backend

function RssLoader() {
    this.backendUrl = "http://localhost:3000/showRss?rss_url=";
}

RssLoader.prototype.printRssToConsole = function(url){

    $.ajax({
        url: this.backendUrl + url,
        method: 'GET',
        dataType: 'json'
    }).done(function (response) {
        if (response.status != 'ok') { throw response.message; }
    
        for (var i in response.items) {
          
            var item = response.items[i];
           
            console.log(item.link);
            console.log(item.title);
            console.log(item.description);

            console.log("--------------");

        }
    });

}