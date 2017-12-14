// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 		DOCUMENT READY
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

jQuery( document ).ready( function() {
				
   console.log('-------------------------------------------------------------------------\nFrom one developer to another, have a great day! ~ Dan @ Manoverboard :-)\n-------------------------------------------------------------------------');
   
   jQuery('.projectArchive').css('min-height','0');
   jQuery('body.tax-sector').css('background-color','green');
   

   
document.head || (document.head = document.getElementsByTagName('head')[0]);

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('favicon');
 link.id = 'favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}






    jQuery('.projectThumb').hide();
    jQuery('.projectThumb').each(function(i) {
        if (this.complete) {
            jQuery(this).fadeIn(1000);
        } else {
            jQuery(this).load(function() {
                jQuery(this).fadeIn(1000);
            });
        }
    });
      
      
      
    
   jQuery('#fadeToBlack404').click(function() {
         document.getElementById('four04P').innerHTML='Zimerman plays Chopin Barcarolle Op. 60';

         //jQuery('#theLayer').addClass('grey');
         //jQuery('#stickyHeader').addClass('nav-up');
         //jQuery('#stickyHeader').removeClass('nav-down');
         //jQuery('#stickyHeader').removeClass('onlyOnce');
         //document.getElementById('four04P').style.color='white';
         jQuery('#vc').fadeIn();
         document.getElementById('four04').style.display='none';
   });

       
            
	// clear enews signup form
	function clearEnews() {
		jQuery("#fieldEmail").val("");
	}
	clearEnews();

	   
   jQuery( ".giantLetter" ).removeClass('hide');
   
   jQuery( "#menuButton" ).mouseover(function(){
	   jQuery("#lifeSaver").removeClass('neverHovered');
   });
   
   
   // ideas - toggle search
   jQuery('#activateSearch').click(function() {
	   if (jQuery('#searchBox').is(":visible")) { 
		   closeSearchBox(); 
	   } else {
		   closeNavBlogAll();
		   openSearchBox(); 
	   }
   });
   function closeSearchBox() {
	   jQuery("#searchBox").fadeOut();
   }
   function openSearchBox() {
	   jQuery("#searchBox").fadeIn();
   }
   
   // ideas - toggle all topics
   jQuery('#allTopics').click(function() {
	   if (jQuery('#navBlogAll').is(":visible")) { 
		   closeNavBlogAll(); 
	   } else {
		   closeSearchBox();
		   openNavBlogAll(); 
	   }
   });
   function closeNavBlogAll() {
	   jQuery("#navBlogAll").fadeOut();
   }
   function openNavBlogAll() {
	   jQuery("#navBlogAll").fadeIn();
   }
   

   
   // Start a Project (SAP) - initialize/hide the last three pages of the form
   jQuery("#sap2").toggle();
   jQuery("#sap3").toggle();	
   jQuery("#sap4").toggle();
   
   // (SAP) - reveal/hide the SAP form
   function revealSAP() {
	   jQuery("#startAProject").fadeIn();
	   setTimeout(function() {
		   jQuery("#name").focus();
	   }, 10);
   }
   function hideSAP() {
	   jQuery("#startAProject").fadeOut();
   }
   jQuery('#sapButton').click(function() {				revealSAP(); 	});
   jQuery('a.startAProject').click(function() {	revealSAP(); 	});
   jQuery('#sap-cancel').click(function() {			hideSAP(); 		});
   
   // (SAP) - next buttons
   jQuery('#sap1-next').click(function() {	sapNext(); });
   jQuery('#sap2-next').click(function() {	sapNext(); });
   jQuery('#sap3-next').click(function() {	sapNext(); });
   
   function sapNext() {
	   jQuery("#startAProject").removeClass('reverse');
	   jQuery("#startAProject").addClass('forward');
	   if (jQuery("#sap1").hasClass('current')) {
		   jQuery("#sap1").removeClass('current');
		   jQuery("#sap1").fadeOut();
		   setTimeout(function() {
			   jQuery("#sap2").addClass('current');
			   jQuery("#sap2").fadeIn();
			   jQuery("#email").focus();
		   }, 400);
	   } else if (jQuery("#sap2").hasClass('current')) {
		   jQuery("#sap2").removeClass('current');
		   jQuery("#sap2").fadeOut();
		   setTimeout(function() {
			   jQuery("#sap3").addClass('current');
			   jQuery("#sap3").fadeIn();	
		   }, 400);
	   } else if (jQuery("#sap3").hasClass('current')) {
		   jQuery("#sap3").removeClass('current');
		   jQuery("#sap3").fadeOut();		
		   setTimeout(function() {
			   jQuery("#sap4").addClass('current');
			   jQuery("#sap4").fadeIn();
			   jQuery("#message").focus();
	   }, 400);
	   }
   }
   
   // (SAP) - back buttons
   jQuery('#sap2-back').click(function() {	sapBack(); });
   jQuery('#sap3-back').click(function() {	sapBack(); });
   jQuery('#sap4-back').click(function() {	sapBack(); });
   
   function sapBack() {
	   jQuery("#startAProject").removeClass('forward');
	   jQuery("#startAProject").addClass('reverse');
	   if (jQuery("#sap4").hasClass('current')) {
		   jQuery("#sap4").removeClass('current');
		   jQuery("#sap4").fadeOut();
		   setTimeout(function() {
			   jQuery("#sap3").addClass('current');
			   jQuery("#sap3").fadeIn();	
		   }, 400);
	   } else if (jQuery("#sap3").hasClass('current')) {
		   jQuery("#sap3").removeClass('current');
		   jQuery("#sap3").fadeOut();		
		   setTimeout(function() {
			   jQuery("#sap2").addClass('current');
			   jQuery("#sap2").fadeIn();
			   jQuery("#email").focus();
		   }, 400);
	   } else if (jQuery("#sap2").hasClass('current')) {
		   jQuery("#sap2").removeClass('current');
		   jQuery("#sap2").fadeOut();
		   
		   setTimeout(function() {
			   jQuery("#sap1").addClass('current');
			   jQuery("#sap1").fadeIn();
			   jQuery("#name").focus();
	   }, 400);
	   }
   }
   
   
   // (SAP) - listen for people to type in the form fields
   jQuery( "#name" ).keyup(function() {
	   checkName();
   });
   jQuery( "#email" ).keyup(function() {
	   checkEmail();
   });
   jQuery( "#message" ).keyup(function() {
	   checkMessage();
   });
   
   // (SAP) - when fields arent empty, activate next buttons
   function checkName() {
	   if (jQuery('#name').val() !== '') {
		   jQuery( "#sap1-next" ).prop('disabled', false);
	   } else {
		   jQuery( "#sap1-next" ).prop('disabled', true);
	   }
   }checkName();
   
   function checkEmail() {
	   if (jQuery('#email').val() !== '') {
		   jQuery( "#sap2-next" ).prop('disabled', false);
	   } else {
		   jQuery( "#sap2-next" ).prop('disabled', true);
	   }
   }checkEmail();
   function checkMessage() {
	   if (jQuery('#message').val() !== '') {
		   jQuery( "#submitButton" ).prop('disabled', false);
	   } else {
		   jQuery( "#submitButton" ).prop('disabled', true);
	   }
   }checkMessage();
   
   // (SAP) - on successful send, close (SAP) window
   var wpcf7Elm = document.querySelector( '.wpcf7' );
   wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
		setTimeout(function() {
			jQuery("#startAProject").fadeOut();
		
		}, 3000);
		setTimeout(function() {
			jQuery("#name").val(""); 
			jQuery("#message").val(""); 
			jQuery("#email").val("");
		}, 3500);

			   
   }, false );
   
   
   
   // enewsletter - signup progression
   jQuery('#newsButton').click(function() {
	   jQuery("#newsletterContent").addClass('position2');
   });
   
   // work - reveal
   jQuery('#closeClientIndex').click(function() {	
	   jQuery('#expandClientIndex').removeClass('expanded');
   });
   
// --------------------------------------------------------------------------------------------------------------- 
   
function showOneDrawer() {
   jQuery("#hiddenFooter1").removeClass('hide');
   jQuery("#hiddenFooter1").height('auto');
   jQuery(document).trigger('show_hidden_footer');
}
function hideOneDrawer() {
		   jQuery("#hiddenFooter1").animate({
			   height: 0
		   }, {
			   duration: 1000,
			   easing: "easeInOutCubic"
		   });		
		   setTimeout(function(){
			   jQuery("#hiddenFooter1").addClass('hide');
		   }, 100);
}        
   
   // footer - logo drawers
   jQuery('#onePercent').click(function() {	
	   if (jQuery("#hiddenFooter1").hasClass('hide') && jQuery("#hiddenFooter2").hasClass('hide')) {
         showOneDrawer();
		   return false;						
	   } else if (jQuery("#hiddenFooter1").hasClass('hide') && ! jQuery("#hiddenFooter2").hasClass('hide')) { 
         hideBcorpDrawer();
         setTimeout(function(){
            showOneDrawer();
         }, 1000);
		   return false;
	   
	   } else {
         hideOneDrawer();
		   return false;
      }
   });
   
   function onceVisible() {
		   jQuery('html, body').animate({
			   scrollTop: jQuery(document).height() - jQuery(window).height()
		   }, {
			   duration: 1000,
			   easing: "easeInOutCubic"
		   });
   }
   jQuery(document).bind('show_hidden_footer', onceVisible);
   
// --------------------------------------------------------------------------------------------------------------- 
function showBcorpDrawer() {
   jQuery("#hiddenFooter2").removeClass('hide');
   jQuery("#hiddenFooter2").height('auto');
   jQuery(document).trigger('show_hidden_footer2');
}

function hideBcorpDrawer() {
   jQuery("#hiddenFooter2").animate({
      height: 0
   }, {
      duration: 1000,
      easing: "easeInOutCubic"
   });		
   setTimeout(function(){
      jQuery("#hiddenFooter2").addClass('hide');
   }, 100);
} 
   
   // footer - logo drawers
   jQuery('#bCorp').click(function() {	
	   if (jQuery("#hiddenFooter2").hasClass('hide') && jQuery("#hiddenFooter1").hasClass('hide')) {
         showBcorpDrawer();
		   return false;						
	   } else if (jQuery("#hiddenFooter2").hasClass('hide') && ! jQuery("#hiddenFooter1").hasClass('hide')) { 
         hideOneDrawer();
         setTimeout(function(){
            showBcorpDrawer();
         }, 1000);
		   return false;
	   
	   } else {
         hideBcorpDrawer();
		   return false;
      }
   });
   
   
   function onceVisible2() {
		   jQuery('html, body').animate({
			   scrollTop: jQuery(document).height() - jQuery(window).height()
		   }, {
			   duration: 1000,
			   easing: "easeInOutCubic"
		   });
   }
   jQuery(document).bind('show_hidden_footer2', onceVisible2); 
   
 // --------------------------------------------------------------------------------------------------------------- 
  
   
   // team member show bio functions
	   teamMembers = document.querySelectorAll('.teamMember');	
	   jQuery.each(teamMembers, function(t){ // teamMembers.forEach( function(t) {
		   jQuery(this).click(function(event) {
			   if (jQuery(this).hasClass('show')) {
				   jQuery(this).removeClass('show');
			   } else {
				   jQuery('.teamMember').removeClass('show');
				   jQuery(this).addClass('show');
			   }
		   });
	   } );
   
   // Break Links, but keep to preserve seo
   jQuery(".breakLink").click(
	   function(event) {
		   event.preventDefault();
	   }
   );
   
   function showNewsletter() {
	   jQuery("#newsletter").removeClass('hidden');
   
	   setTimeout(function(){	
		   jQuery("#newsletter").animate({
			   opacity: 1
		   }, {
			   duration: 350,
			   easing: "easeInOutCubic"
		   });
	   }, 400); 
   }
   function hideNewsletter() {
   
	   jQuery("#newsletter").animate({
		   opacity: 0
	   }, {
		   duration: 150,
		   easing: "easeInOutCubic"
	   });
	   setTimeout(function(){	
		   jQuery("#newsletter").addClass('hidden');
	   }, 150); 
		   
   }
   
   


function stopScrolling (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}
	
	jQuery("#lifeSaver").bind("click", clickLifeSaver);

   // menu pop open
   function clickLifeSaver() {
	   
	   // disable while running
	   jQuery("#lifeSaver").unbind("click");
         
	   if (jQuery("#bigAssDot").hasClass('expanded')) {
         jQuery(window).disablescroll("undo");
         
         changeFavicon('/wp-content/themes/radracer3.0/img/favicons/favicon.ico');
		   //jQuery("#favicon").attr("href","/wp-content/themes/radracer3.0/img/favicons/favicon.ico");
		   jQuery("#bigAssDot").removeClass('expanded');
   
		   setTimeout(function(){
			   jQuery("#navMain").removeClass('show');
			   jQuery("body").removeClass('lockScroll');
			   jQuery("#newsletterContent").removeClass('position2');
			   jQuery("#newsletterContent").addClass('position1');
			   clearEnews();
		   }, 200); 
		   
		   setTimeout(function(){
			   jQuery("#smallAssDot").removeClass('expanded');
		   }, 290); 
		   hideNewsletter();	
	   } else {
         jQuery(window).disablescroll();
         
         changeFavicon('/wp-content/themes/radracer3.0/img/favicons/favicon-off.ico');
			//jQuery("#favicon").attr("href","/wp-content/themes/radracer3.0/img/favicons/favicon-off.ico");
   
		   jQuery("#bigAssDot").addClass('expanded');
		   jQuery("#smallAssDot").addClass('expanded');
		   
		   setTimeout(function(){
			   jQuery("#navMain").addClass('show');
		   }, 250); 
		   showNewsletter();
	   }
	   
   
	   setTimeout(function(){
		   jQuery("#lifeSaver").bind("click", clickLifeSaver);
	   }, 500); 
	   
   }
   
   
   
   // restrict hovers to non-touch devices
	   var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
	   if (!touchsupport){ // browser doesn't support touch
		   document.documentElement.className += " non-touch";
	   }
		   
   // expander
	   jQuery(function () {
		   jQuery('.expander').simpleexpand();
	   });
	   
   

   
   
   
   
   jQuery('#bannerTitle').fadeIn();
   sizeTitleBanner();
   

   
   function sizeTitleBanner() {
	   var bannerheight = jQuery('#banner').height();	
	   var bannerwidth = jQuery('#banner').width();
	   if ((bannerwidth*0.3) < 400) {
		   jQuery('#bannerTitle').css("font-size", (bannerwidth*0.3)+"px");
	   } else {
		   jQuery('#bannerTitle').css("font-size","3830%");
	   }
	   jQuery('#bannerTitle').css("line-height", bannerheight+70+"px");
	   jQuery('.giantLetter').css("line-height", bannerheight+"px");
	   jQuery('.giantLetter').css("font-size", (bannerheight*0.8) +"px");
   }


   function centerVertically() {
	   var outerHeight, innerHeight, myOffset;
	   
	   outerHeight = jQuery('#navMain').height();
	   innerHeight = jQuery("#navInner").height();
	   
	   myOffset = ((outerHeight -  innerHeight) / 2);
	   myOffset = myOffset  + "px";
	   //console.log(myOffset + ' offset');
	   jQuery("#navInner").css("margin-top",myOffset);
   }
	centerVertically();

	
   var resizeTimer;
   jQuery(window).on('resize', function(e) {
	   clearTimeout(resizeTimer);
	   resizeTimer = setTimeout(function() {
		   sizeTitleBanner();
			centerVertically();
	   }, 50);
   });


   

}); // End of DOCUMENT READY




// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 		PAGE LOADED
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
jQuery(window).load(function(){
	
	jQuery('#stickyHeader').removeClass('forceShow');
	
	if (document.getElementById('paceScript')) {
		Pace.on('done', function() {
			setTimeout(function(){
					jQuery('#mobload').removeClass('notLoaded');
			}, 200); 			
			setTimeout(function(){
				jQuery('#bigAssDot').removeClass('notLoaded');
				jQuery('#bigAssDot').addClass('loaded');
			}, 700); 
			setTimeout(function(){
				jQuery('#mobload').addClass('hidden');
			}, 1200); 
			setTimeout(function(){
				jQuery('#lifeSaver').removeClass('notLoaded');
			}, 1000);
		});
	}
	
   AOS.init({
	   //easing: 'ease-in-out-quad',
      easing: 'ease-out-cubic',
	   once: true,
	   duration: 1000,
	   offset: 0,
   });
   
   // general - slideshows
   jQuery(function() {
	   jQuery(".rsGallery").responsiveSlides({
            pager: true, 
            nav: false,
			   auto: true,             // Boolean: Animate automatically, true or false
			   speed: 0,
			   timeout: 4000,
			   pause: true
		 });
	 });

   // general - slideshows
   jQuery(function() {
	   jQuery(".rsHome").responsiveSlides({
            pager: true, 
            nav: false,
			   auto: true,             // Boolean: Animate automatically, true or false
			   speed: 0,
			   timeout: 4000,
			   pause: true
		 });
	 });
   
   	//  place this within dom ready function
	function setFillParents() {
		jQuery('.fillParent').resizeToParent();		
	} setFillParents();	
   
   
   

      

   
   
   


}); // End of FAGE LOADED
