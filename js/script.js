$(document).ready(function(){
	$("form#form").submit(function(event){
		event.preventDefault();
		$(".unsubscribed").hide();
		$(".subscribe").show();
	})
	$("form#registration").submit(function(event){
		event.preventDefault();
		$(".unsubscribed").hide();
		$(".activate").show();

		var apartmentName= $("input#aptName").val();

		$("div#recent1").append("<p>" + apartmentName+ "</p>");
	})

});

// 









// $('#myModal').modal('show');
// www.jquery2dotnet.com
/*

My Custom JS
============

*/