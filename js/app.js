$(document).ready(function(){
	if ($(window).width() <= 992) {  
		var contador = 0;

		$("#menubtn").click(function(){
			switch(contador){
				case 0:
					contador = 1;
					$(".menu").animate({
						width : "0px"
					});
					break;
				case 1:
					contador = 0;
					$(".menu").animate({
						width : "80%"
					});
					break;
				default:
					break;
			}
		});
	} 
	
});
 