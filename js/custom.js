$(function($){
	'use strict';
	/*
	|----------------------------------------------------------------------------
	|  Pre Loader 
	|----------------------------------------------------------------------------
	*/	
	$(window).on('load', function() {
	    $("#loader").fadeOut();
	    $("#preloader").delay(100).fadeOut("slow");
	});

	/*
	|----------------------------------------------------------------------------
	|   Sticky Navbar 
	|----------------------------------------------------------------------------
	*/

	$("#sticker").sticky({topSpacing:0});

	/*
	|----------------------------------------------------------------------------
	|  Right Navbar Push Menu 
	|----------------------------------------------------------------------------
	*/	
	$(".navbar-toggle").on("click", function () {
		$(this).toggleClass("active");
		$('.right-section').toggleClass("selected");
	});

	/*
	|----------------------------------------------------------------------------
	|   Onepage Nav 
	|----------------------------------------------------------------------------
	*/
	$('.navbar').onePageNav({
	    currentClass: 'current',
	    changeHash: false,
	    scrollSpeed: 1000,
	    scrollThreshold: 0.9,
	    filter: '',
	    easing: 'swing',
	    begin: function(){
	        //I get fired when the animation is starting
	    },
	    end: function(){
	        //I get fired when the animation is ending
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});
	
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') ) {
			$(this).collapse('hide');
		}
	});

	/*
	|----------------------------------------------------------------------------
	|   Counter Settings
	|----------------------------------------------------------------------------
	*/
	// first item
	$('.skill-section').waypoint(function(direction){
		$('.first.circle').circleProgress({
		  value: 0.75,
		  fill: {color: '#82b440'}
		}).on('circle-animation-progress', function(event, progress) {
		  var progress_multiply = 75 * progress;
		  $(this).find('strong').html(parseInt(progress_multiply, 10) + '<i>%</i>');
		
		});

		// second item
		$('.second.circle').circleProgress({
		  value: 0.8,
		  fill: {color: '#06aaa4'}
		}).on('circle-animation-progress', function(event, progress) {
		  var progress_multiply = 80 * progress;
		  $(this).find('strong').html(parseInt(progress_multiply, 10) + '<i>%</i>');
		});

		// third item
		$('.third.circle').circleProgress({
		 value: 0.75,
		  fill: {color: '#82b440'}
		}).on('circle-animation-progress', function(event, progress) {
		  var progress_multiply = 75 * progress;
		  $(this).find('strong').html(parseInt(progress_multiply, 10) + '<i>%</i>');
		});

		// forth item
		var c4 = $('.forth.circle');
		c4.circleProgress({
		  value: 0.8,
		  fill: {color: '#06aaa4'}
		}).on('circle-animation-progress', function(event, progress) {
		  var progress_multiply = 80 * progress;
		  $(this).find('strong').html(parseInt(progress_multiply, 10) + '<i>%</i>');
		});
		this.destroy()
		}, {
			offset: 'bottom-in-view'
	});
	
	/*
	|----------------------------------------------------------------------------
	|   Stellar Parallax Settings
	|----------------------------------------------------------------------------
	*/
	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});
	
	/*
	|----------------------------------------------------------------------------
	|   Main Slider
	|----------------------------------------------------------------------------
	*/
	var revapi;	
	revapi = jQuery("#rev_slider_1").revolution({
		sliderType:"standard",
	    sliderLayout:"fullwidth",
	    fullScreenOffsetContainer:"#header",
		responsiveLevels:[4096,1400,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
			    enable:true
			},
			bullets:{
				enable:false
			}			
		},			
		gridwidth:[1140,950,720,320],
		gridheight:[950,700,500,400]		
	});
	/*
	|----------------------------------------------------------------------------
	|   Main Slider 2
	|----------------------------------------------------------------------------
	*/
	var revapi;	
	revapi = jQuery("#rev_slider_2").revolution({
		sliderType:"standard",
	    sliderLayout:"fullwidth",
	    fullScreenOffsetContainer:"#header",
		responsiveLevels:[4096,1400,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
			    enable:true
			},
			bullets:{
				enable:false
			}			
		},			
		gridwidth:[1140,1140,720,320],
		gridheight:[950,650,600,400]		
	});
	/*
	|----------------------------------------------------------------------------
	|   Main Slider 3
	|----------------------------------------------------------------------------
	*/
	var revapi;	
	revapi = jQuery("#rev_slider_3").revolution({
		sliderType:"standard",
	    sliderLayout:"fullscreen",
	    fullScreenOffsetContainer:"#header",
		responsiveLevels:[4096,1400,992,768],
		delay:9000,
		parallax: {
			type:"3D",
			origo:"slidercenter",
			speed:2000,
			levels:[5,10,20,30,25,30,35,40,45,50,47,48,49,50,51,55],
			type:"3D",
			ddd_shadow:"off",
			ddd_bgfreeze:"off",
			ddd_overflow:"hidden",
			ddd_layer_overflow:"visible",
			ddd_z_correction:65,
		},
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
			    enable:false
			},
			bullets:{
				enable:false
			}			
		},			
		gridwidth:[1140,1140,720,320],
		gridheight:[830,600,600,400]		
	});
		

	/*
	|----------------------------------------------------------------------------
	|   Main Slider 4
	|----------------------------------------------------------------------------
	*/

	var revapi;	
	revapi = jQuery("#rev_slider_4").revolution({
		sliderType:"standard",
	    sliderLayout:"fullwidth",
	    fullScreenOffsetContainer:"#header",
		responsiveLevels:[4096,1400,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
			    enable:false
			},
			bullets:{
				enable:false
			}			
		},			
		gridwidth:[1140,1140,720,320],
		gridheight:[950,650,600,450]		
	});

	/*
	|----------------------------------------------------------------------------
	|   Main Slider 5
	|----------------------------------------------------------------------------
	*/

	var revapi;	
	revapi = jQuery("#rev_slider_5").revolution({
		sliderType:"standard",
	    sliderLayout:"fullwidth",
	    fullScreenOffsetContainer:"#header",
		responsiveLevels:[4096,1400,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
			    enable:false
			},
			bullets:{
				enable:true,
				hide_onleave:false,
				hide_onmobile:true,
				h_align:"center",
				v_align:"center",
				space:10,
				h_offset:0,
				v_offset:70
			}			
		},			
		gridwidth:[1140,1140,720,320],
		gridheight:[950,650,550,450]		
	});

	/*
	|----------------------------------------------------------------------------
	|   Main Slider 6
	|----------------------------------------------------------------------------
	*/

	var revapi;	
	revapi = jQuery("#rev_slider_6").revolution({
		sliderType:"standard",
	    sliderLayout:"fullwidth",
	    fullScreenOffsetContainer:"#header",
		responsiveLevels:[4096,1200,992,768],
		delay:9000,
		navigation: {
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows:{
			    enable:false
			},
			bullets:{
				enable:true,
				hide_onleave:false,
				hide_onmobile:true,
				h_align:"left",
				v_align:"center",
				space:20,
				h_offset:100,
				v_offset:150
			}			
		},			
		gridwidth:[1140,950,720,320],
		gridheight:[700,650,550,450]
	});

	/*
	|----------------------------------------------------------------------------
	|   Isotop Gallery JS
	|----------------------------------------------------------------------------
	*/
	jQuery(window).on("load resize",function(e){
		var $container = $('.isotope'),
		colWidth = function () {
			var w = $container.width(), 
			columnNum = 1,
			columnWidth = 0;
		//Select what will be your porjects columns according to container widht
		if (w > 1040)     { columnNum  = 3; }  
		else if (w > 850) { columnNum  = 3; }  
		else if (w > 768) { columnNum  = 1; }  
		else if (w > 480) { columnNum  = 1; }
		else if (w > 300) { columnNum  = 1; }
		columnWidth = Math.floor(w/columnNum);

		//Default item width and height
		$container.find('.masonry-item').each(function() {
			var $item = $(this), 
			width = columnWidth-30;
			$item.css({ width: width});
		}); 
		return columnWidth;
	},
	isotope = function () {
		$container.isotope({
			resizable: true,
			itemSelector: '.masonry-item',
			masonry: {
				columnWidth: colWidth(),
				layoutMode: 'fitRows',
				gutterWidth: 10
			}
		});
	};
	isotope(); 

		// bind filter button click
		$('.isotope-filters').on( 'click', 'button', function() {
			var filterValue = $( this ).attr('data-filter');
			$container.isotope({ filter: filterValue });
		});

		// change active class on buttons
		$('.isotope-filters').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
				$buttonGroup.find('.active').removeClass('active');
				$( this ).addClass('active');
			});
		}); 
	});

	/*
	|----------------------------------------------------------------------------
	|   Testimonial Slider
	|----------------------------------------------------------------------------
	*/
	$('.testimonial-carousel').owlCarousel({
		loop:true,
	    margin:10,
	    nav:true,
	    navText: ['<img src="images/client/arrow-left.png" alt="client" />', '<img src="images/client/arrow-right.png" alt="client" />'],
	    items: 1
	})

	/*
	|----------------------------------------------------------------------------
	|   Counter settings
	|----------------------------------------------------------------------------
	*/

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	/*
	|----------------------------------------------------------------------------
	|   Magnific popup Settings
	|----------------------------------------------------------------------------
	*/
	$('.image-large').magnificPopup({
		type: 'image',
		 gallery:{
		    enabled:true
		  }
	});
	$('.play-video').magnificPopup({
		type: 'iframe'
	});
	$.extend(true, $.magnificPopup.defaults, {
    iframe: {
        patterns: {
           youtube: {
              index: 'youtube.com/', 
              id: 'v=', 
              src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
          }
        }
    }
	});
/*-----------------------------------------------
		Newletter Subscribe Settings
------------------------------------------------- */
	$(".newsletter-signup").ajaxChimp({
		callback: mailchimpResponse,
		url: "http://codepassenger.us10.list-manage.com/subscribe/post?u=6b2e008d85f125cf2eb2b40e9&id=6083876991" // Replace your mailchimp post url inside double quote "".  
	});
	function mailchimpResponse(resp) {
		 if(resp.result === 'success') {
		 
			$('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();
			
		} else if(resp.result === 'error') {
			$('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
		}  
	};
	
	/*==========================================================
		Ajax Contact Form
	==========================================================*/
	
	// Function for email address validation
	function isValidEmail(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

		return pattern.test(emailAddress);

	};
	$("#contact-form").on('submit', function(e) {
		e.preventDefault();
		var data = {
			name: $("#name").val(),
			email: $("#email").val(),
			subject: $("#subject").val(),
			message: $("#message").val()
		};

		if ( isValidEmail(data['email']) && (data['message'].length > 1) && (data['name'].length > 1) ) {
			$.ajax({
				type: "POST",
				url: "sendmail.php",
				data: data,
				success: function() {
					$('#contact-form .input-success').delay(500).fadeIn(1000);
					$('#contact-form .input-error').fadeOut(500);
				}
			});
		} else {
			$('#contact-form .input-error').delay(500).fadeIn(1000);
			$('#contact-form .input-success').fadeOut(500);
		}

		return false;
	});
	/*
	|----------------------------------------------------------------------------
	|   Masonry Settings
	|----------------------------------------------------------------------------
	*/
	$('.masonry').masonry({
	  // options...
	  itemSelector: '.masonry-item'
	});
	
    /*
	|----------------------------------------------------------------------------
	|  Scroll Top Settings
	|----------------------------------------------------------------------------
	*/
	jQuery(window).scroll(function($) {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 90) {
            jQuery(".scroll-top").addClass("active");
        }
        else{
            jQuery(".scroll-top").removeClass("active");
        }
    });
	 jQuery(".scroll-top").on('click',function(event){
        event.preventDefault();
        jQuery('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
	
}(jQuery));