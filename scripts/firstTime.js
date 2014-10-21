$(document).ready(function(){
	//$('h1').slideDown('slow');

	$('#menu').accordion({collapsible: true, active: false});

    $('h1').draggable();

    $('#ulNav').sortable();

    $('table').mouseenter(function(){
		//$(this).fadeTo('slow',1);
		$(this).effect('explode', 1000);
        console.log("mouse went over table");
	});

	$('table').mouseleave(function(){
		$(this).fadeTo('slow', 0.5);
	});

	 $('.pull-me').click(function(){
        $('.panel').slideToggle('slow');
    });
//var variable = $('input[name=fieldName]').val();


});

