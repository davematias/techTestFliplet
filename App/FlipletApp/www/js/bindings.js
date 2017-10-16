//class responsible binding the ui elements

function Binder() {
   
}

//function to bind the button click
Binder.prototype.bind = function(){
   
    $(".optionsbtn").click(this.optionsButton);

    $(".searchbtn").click(this.searchButton);

}

//function to disable / enable the textbox and button
function disableItems(state) {

    $(".searchbtn").prop('disabled', state);
    $(".searchurl").prop('disabled', state);

}

//function to run when the options button is clicked
Binder.prototype.optionsButton = function () {

    var storage = window.localStorage;
    var value = storage.getItem(GLOBAL_STORAGE_SERVERURL);

    //if there is not a value, show some default value
    if(!value)
        value = "https://localhost:3000";

    var message = "Please set the server address";
    var title = "Server Address";
    var buttonLabels = ["Confirm"];

    navigator.notification.prompt(message, promptCallback,
        title, buttonLabels, value);

    function promptCallback(result) {
        
        storage.setItem(GLOBAL_STORAGE_SERVERURL, result.input1);

    }

}

//function to run when the search button is clicked
Binder.prototype.searchButton = function () {
   
    var loader = new RssLoader();

    var url = $(".searchurl").val();

    if (url) {
        //disable input and button
        disableItems(true);

        loader.loadRss(url, function (error, data) {
            //enable input and button
            disableItems(false);

            if (error) {
                console.log(error);
                alert("invalid Feed");
            }
            else {

                //add an hr to the page container div
                $(".container-fluid").append("<hr />");

                for (var i in data) {

                    var item = data[i];

                    //base divs
                    var $baseDiv = $("<div class='row spacer'></div>");
                    var $photoDiv = $("<div class='col-md-2 col-sm-12'><img class='placeholderimg img-thumbnail center-block' src='http://placehold.it/150x150' /></div>");
                    var $dataDiv = $("<div class='col-md-10 col-sm-12'></div>");

                    //divs with feed data
                    var $titleDiv = $("<div><a target='_blank' href='" + item.link + "'><h2 class='feedtitle'>" + item.title + "<h2></a></div>");
                    var $descriptionDiv = $("<div>" + item.description + "</div>");

                    //append the feed data to the data div
                    $dataDiv.append($titleDiv);
                    $dataDiv.append($descriptionDiv);

                    //append the divs to the new row
                    $baseDiv.append($photoDiv);
                    $baseDiv.append($dataDiv);

                    //add new content to the page container div
                    $(".container-fluid").append($baseDiv);

                }


            }

        });

    }
    else
        alert("invalid url"); 

}