jQuery(document).ready( function() {
	
	//console.log('nav_ishome.js loaded');
	
	
	jQuery(window).scroll(function(){
		
		allowedDistance = jQuery(window).height() *0.15;
		distanceFromTop = jQuery(window).scrollTop();
		diff = allowedDistance - distanceFromTop;
		
		console.log("allowed = "+ allowedDistance);
		console.log("distance = "+ distanceFromTop);
	
		if (jQuery(window).scrollTop() < allowedDistance){
			jQuery('#stickyHeader').css('margin-top',diff+'px');
			jQuery('#stickyHeader').removeClass('shadow');
		} else {
			jQuery('#stickyHeader').addClass('shadow');
			jQuery('#stickyHeader').css('margin-top','0');
			jQuery('#stickyHeader').removeClass('top');
			jQuery('#stickyHeader').addClass('nottop');
		}
	});


   jQuery('#lifeSaver').mouseup(function() {
			allowedDistance = jQuery(window).height() *0.15;
			distanceFromTop = jQuery(window).scrollTop();
			diff = allowedDistance - distanceFromTop;
		   
		    if (! jQuery('#lifeSaver').hasClass('clicked')) {
				jQuery("#stickyHeader").animate({
					marginTop: 0
				}, {
					duration: 700,
					easing: "easeInOutCubic"
				});
				setTimeout(function(){
				   jQuery("#stickyHeader").addClass('locked');
				}, 701); 
				jQuery('#lifeSaver').addClass('clicked');
			} else {
				//jQuery("#stickyHeader").css('marginTop', '0');
				if (diff < 0) {
					jQuery("#stickyHeader").removeClass('locked');
					jQuery('#stickyHeader').addClass('shadow');
					jQuery("#stickyHeader").animate({
						marginTop: '0'				
					}, {
						duration: 700,
						easing: "easeInOutCubic"
					});					
				} else {
					jQuery("#stickyHeader").css('margin-top', '0');
					jQuery("#stickyHeader").removeClass('locked');
					jQuery('#stickyHeader').removeClass('shadow');
					setTimeout(function(){
	
						jQuery("#stickyHeader").animate({
							marginTop: diff+'px'
						}, {
							duration: 700,
							easing: "easeInOutCubic"
						});	


					}, 10); 
				
				}
				jQuery('#lifeSaver').removeClass('clicked');

			}
   });




	
   
}); // End of DOCUMENT READY