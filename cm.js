




   $(document).ready(function() {
 	setInterval( blinkSocial, 5000 );
  });

 function blinkSocial() {

	$("#nav-youtube").toggleClass("hover").delay(200).queue(function() {
		$(this).toggleClass("hover");
		$(this).dequeue();
		
		$("#nav-facebook").toggleClass("hover").delay(200).queue(function() {
			$(this).toggleClass("hover");
			$(this).dequeue();
			
			$("#nav-insta").toggleClass("hover").delay(200).queue(function() {
				$(this).toggleClass("hover");
				$(this).dequeue();
			});
			
		});
		
	});

}

// $(function blinkSocial(){
//   $('#nav-youtube').hover(function() {
//     $('#nav-youtube').addId('hover');
//   }, function blinkSocial() {
//     $('#nav-youtube').removeId('hover');
//   })
// })