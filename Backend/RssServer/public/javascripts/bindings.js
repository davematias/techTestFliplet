//class responsible binding the ui elements

function Binder() {
   
}

//function to bind the button click
Binder.prototype.bind = function(){

    var context = this;

    var loader = new RssLoader();

    $(".searchbtn").click(function () {
        
        var url = $(".searchurl").val();

        if(url)
        {
            //disable input and button
            context.disableItems(true);

            loader.loadRss(url, function(error, data)
            {
                //enable input and button
                context.disableItems(false);

                if (error)
                    console.log(error);
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
                        var $titleDiv = $("<div><a target='_blank' href='" + item.link +"'><h2 class='feedtitle'>" + item.title+"<h2></a></div>");
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

    });

}

//function to disable / enable the textbox and button
Binder.prototype.disableItems = function (state) {

    $(".searchbtn").prop('disabled', state);
    $(".searchurl").prop('disabled', state);

}