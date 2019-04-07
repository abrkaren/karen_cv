window.onload = function () {

    $( ".menu" ).click(function() {
	  $( ".navbar_collapse" ).toggleClass( "show" );
	  $( ".menu" ).toggleClass( "toggled" );
	  
	});
	$( ".menu" ).click(function() {
	  $( ".navbar_translate" ).toggleClass( "navbar_toggler" );

	//resize default menu ============================================
	  	function myFunction(x) {
	  if (x.matches) { // If media query matches

	  } else {
	     $( ".navbar_translate" ).removeClass("navbar_toggler");
	     $( ".navbar_collapse" ).removeClass( "show" );
	     $( ".menu" ).removeClass( "toggled" );
	  }
	}

	var x = window.matchMedia("(max-width: 992px)")
	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes
	});
	//resize default menu ============================================
     
    //skill bar progress js++++++++++++++++++++++++++++++++++++++++++++++
    	$.fn.isInViewport0 = function() {
	    var elementTop0 = $(this).offset().top+50;
	    var elementBottom0 = elementTop0 + $(this).outerHeight()-280;
	    var viewportTop0 = $(window).scrollTop();
	    var viewportBottom0 = viewportTop0 + $(window).height();
	    return elementBottom0 > viewportTop0 && elementTop0 < viewportBottom0;
    	}; 

    	circle1 = false;
		$(window).on('resize scroll', function() {
			if(circle1 == false){
				
			    if ($('#skills').isInViewport0()) {
			         	
			     jQuery(document).ready(function(){
					jQuery('.skillbar').each(function(){
						jQuery(this).find('.skillbar-bar').animate({
							width:jQuery(this).attr('data-percent')
						},6000);
					});
				});

				jQuery('.Count').each(function () {
				  var $this = $(this);
				  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
				    duration: 6000,
				    easing: 'swing',
				    step: function () {
				      $this.text(Math.ceil(this.Counter));
				    }
				  });
				});

				circle1 = true;
			    } else{
			    	
			    }
			}
		});
		// when page onload if scrolled
				if(circle1 == false){
			
		    if ($('#skills').isInViewport0()) {

		         	jQuery(document).ready(function(){
					jQuery('.skillbar').each(function(){
						jQuery(this).find('.skillbar-bar').animate({
							width:jQuery(this).attr('data-percent')
						},6000);
					});
				});

				jQuery('.Count').each(function () {
				  var $this = $(this);
				  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
				    duration: 6000,
				    easing: 'swing',
				    step: function () {
				      $this.text(Math.ceil(this.Counter));
				    }
				  });
				});

				circle1 = true;
		    } else{
		    	
		    }
	    }
	//skill bar progress js++++++++++++++++++++++++++++++++++++++++++++++
    
    // scrool navbar +++++++
    $(window).scroll(function(){
    	var scroll = $(window).scrollTop();
		  if (scroll > 480) {
		    $("#navBar").css("background" , "linear-gradient(#378C3F 0%, #000 80%)");//#378C3F
		    $("#navBar").css("box-shadow" , "0px 5px 25px 0px rgba(0, 0, 0, 0.2)");
		  }
		  else{
			  $("#navBar").css("background" , "transparent");  	
			  $("#navBar").css("box-shadow" , "none");
		  }
    })
        var scroll = $(window).scrollTop();
		  if (scroll > 480) {
		    $("#navBar").css("background" , "linear-gradient(#378C3F 0%, #000 80%)");
		    $("#navBar").css("box-shadow" , "0px 5px 25px 0px rgba(0, 0, 0, 0.2)");
		  }
		  else{
			  $("#navBar").css("background" , "transparent");  
			  $("#navBar").css("box-shadow" , "none");	
		  }
       
    // scrool navbar +++++++

// circle jquery circle start #other+++++++++++++++++++++++++++++++++++++++++++++++
	    $.fn.isInViewport1 = function() {
	    var elementTop1 = $(this).offset().top+300;
	    var elementBottom1 = elementTop1 + $(this).outerHeight()-680;
	    var viewportTop1 = $(window).scrollTop();
	    var viewportBottom1 = viewportTop1 + $(window).height();
	    //console.log(viewportTop1)
	    return elementBottom1 > viewportTop1 && elementTop1 < viewportBottom1;
    	};    

		circle=false;
		$(window).on('resize scroll', function() {
			if(circle == false){
				
		    if ($('#other').isInViewport1()) {
		         	$("#circle1").circliful({
		                animationStep: 5,
		                foregroundBorderWidth: 10,
		                backgroundBorderWidth: 10,
		                percent: 99,
		                progressColor: { 0: 'rgb(160, 41, 14)', 51: 'rgb(173, 142, 20)', 81: 'rgb(10, 86, 9)'},
		                fontColor: "rgb(10, 86, 9)"
		           });
			$("#circle2").circliful({
		                animationStep: 5,
		                foregroundBorderWidth: 10,
		                backgroundBorderWidth: 10,
		                percent: 80,
		                progressColor: { 0: 'rgb(160, 41, 14)', 51: 'rgb(173, 142, 20)', 81: 'rgb(10, 86, 9)'},
		                fontColor: "rgb(173, 142, 20)"
		           });
			$("#circle3").circliful({
		                animationStep: 5,
		                foregroundBorderWidth: 10,
		                backgroundBorderWidth: 10,
		                percent: 50,
		                progressColor: { 0: 'rgb(160, 41, 14)', 51: 'rgb(173, 142, 20)', 81: 'rgb(10, 86, 9)'},
		                fontColor: "rgb(160, 41, 14)"
		           });

			circle = true;
		    } else{
		    
		    }
		}
		});

		//when onload page scrooled positions ++++ :)
		if(circle == false){
			
		    if ($('#other').isInViewport1()) {
		         	$("#circle1").circliful({
		                animationStep: 5,
		                foregroundBorderWidth: 10,
		                backgroundBorderWidth: 10,
		                percent: 99,
		                progressColor: { 0: 'rgb(160, 41, 14)', 51: 'rgb(173, 142, 20)', 81: 'rgb(10, 86, 9)'},
		                fontColor: "rgb(10, 86, 9)"
		           });
					$("#circle2").circliful({
		                animationStep: 5,
		                foregroundBorderWidth: 10,
		                backgroundBorderWidth: 10,
		                percent: 80,
		                progressColor: { 0: 'rgb(160, 41, 14)', 51: 'rgb(173, 142, 20)', 81: 'rgb(10, 86, 9)'},
		                fontColor: "rgb(173, 142, 20)"
		           });
					$("#circle3").circliful({
		                animationStep: 5,
		                foregroundBorderWidth: 10,
		                backgroundBorderWidth: 10,
		                percent: 50,
		                progressColor: { 0: 'rgb(160, 41, 14)', 51: 'rgb(173, 142, 20)', 81: 'rgb(10, 86, 9)'},
		                fontColor: "rgb(160, 41, 14)"
		           });

				circle = true;
		    } else{
		    	
		    }
	    }

// circle jquery circle end #other+++++++++++++++++++++++++++++++++++++++++++++++

        // add if want scroolTop === 0 when window beforeunload for preloader
        $(window).on('beforeunload', function(){
		  $(window).scrollTop(0);
		});
		// add if want scroolTop === 0 when window beforeunload for preloader
}







 


