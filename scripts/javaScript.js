$(document).ready(function(){
	
	//clear button
	$('#clear').click(function(){
		$('#results').empty();
	});

	//search button
	$('#search').click(function(){

		function hndlr(response)
		{
		
			for(var i =0; i <response.items.length; i++)
			{
				var item = response.items[i];
				document.getElementById("#results").innerHTML += "<br>" + item.htmlTitle;
			}

		} 



		//URL and key for search
		var searchItem = $('input[name=searchBox]').val();
		var key = "Get API code from GOOGLE";
		var url = "https://www.googleapis.com/customsearch/v1?"

		url += "key=" + key;
		url +="&cx=013036536707430787589:_pqjad5hr1a"
		url +="&q=" + searchItem;
		url += "&alt=json"

		//log url
		console.log(url);

		
		$.getJSON(url, function(returndata) 
		{
						
			$("#results").append("<h2>" + searchItem +"</h2>" ); // if results are null the print out sorry message
								
			if (returndata.items.length == 0)
			{
				$("#results").append("<p>Sorry we could not find what you are looking for<p><br><img src='http://www.google.com/url?sa=i&source=images&cd=&cad=rja&docid=sUf17_H_SVT9AM&tbnid=T2yArJUMAbpadM:&ved=&url=http%3A%2F%2Fhdshootz.blogspot.com%2F2012%2F12%2Fi-am-sorry-i-am-sorry-wallpapers-sad.html&ei=OFlEUoCkFMaDqgHY4oCgAw&psig=AFQjCNEm_ahn6b_IajgJdM5dk3c1kRPzhA&ust=1380297400379064' width='200px' height='250px' /><br>")
			}
			else //else print out findings,,,,yet to do a search that google has not found anything
			{
				for(var i =0; i <returndata.items.length; i++) //go through the array and print out the data,,,
					{
						var item = returndata.items[i];  //cast data into item
						console.log(returndata.items[i]);  //log items
						//results div, item.htmlTitle has format from google to bold the title,, pretty cool.
						
						if(item.pagemap) //if image src is available
						{	//print out with source
							if(item.pagemap.cse_image)
							{
								$("#results").append("<div class='searchResult'><br><button id='close'>x</button>" + item.htmlTitle + "<br>"  + item.snippet + "<br><img src='"+ item.pagemap.cse_image[0].src +"' width= '200px' height='200px'> <br> <a href='" + item.link +"' target='_blank' id='link'>" + item.formattedUrl + "</a></div>");
																
    							
							}
							else
							{
								//$("#results").append("<div class='searchResult'><br><button id='close'>x</button>" + item.htmlTitle + "<br>" + "<a href='" + item.link +"' target='_blank'>" + item.formattedUrl + "</a>" + "<br>" + item.snippet + "<br><br></div>");
								$("#results").append("<div class='searchResult'><br><button>x</button>" + item.htmlTitle + "<br>"  + item.snippet + "<br>  <a href='" + item.link +"' target='_blank' id='link'>" + item.formattedUrl + "</a></div>");
								
							}
						}
						else
						{
							
							//print without image src
							//$("#results").append("<div class='searchResult'><br><button id='close'>x</button>" + item.htmlTitle + "<br>" + "<a href='" + item.link +"' target='_blank'>" + item.formattedUrl + "</a>" + "<br>" + item.snippet + "<br><br></div>");	
							
							$("#results").append("<div class='searchResult'><br><button>x</button>" + item.htmlTitle + "<br>"  + item.snippet + "<br><a href='" + item.link +"' target='_blank' id='link'>" + item.formattedUrl + "</a></div>");
							//put action in for clearing unwanted data.
							
						}

						$('.searchResult').click(function()
								{
       								 var $input = $(this);

       								 if ($input.id == 'link')
       								 {
       								 	//do nothing
       								 }
       								 else
       								 {
       								 	$($input).hide();	
       								 }

       								 
       								 //$(this, '#link').hide();
       								 
    							});
					}
			}
								
		});

	});

});

