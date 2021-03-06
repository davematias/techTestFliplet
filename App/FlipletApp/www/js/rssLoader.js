//class responsible for loading rss data from the backend

function RssLoader() {
    //this.backendUrl = "http://192.168.1.122:3000/showRss?rss_url=";
}

//loads the rss and prints it to the console
RssLoader.prototype.printRssToConsole = function(url){

    this.loadRss(url, function(error, data){

        if(error)
            console.log(error);
        else
        {
            for (var i in data) {

                var item = data[i];

                console.log(item.link);
                console.log(item.title);
                console.log(item.description);

                console.log("--------------");

            }
        }

    });

}

//loads the rss with ajax and returns the data or error
RssLoader.prototype.loadRss = function(url, callback){

    var storage = window.localStorage;
    var value = storage.getItem(GLOBAL_STORAGE_SERVERURL);

    $.ajax({
        url: value + "/showRss?rss_url=" + url,
        method: 'GET',
        dataType: 'json'
    }).done(function (response) {

        if (response.status != 'ok')
            callback(response.message); 
        else
        {
            callback(null, response.items);
        }

    })
    .fail(function (xhr, textStatus) {
        console.log(xhr.status);
        callback(textStatus); 
    });

}