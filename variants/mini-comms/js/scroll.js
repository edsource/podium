/* VARIANT NOTES

 - title only navigation along the side
 - navigation to the bottom always regardless of screen size
 - scroll to topin nav

=======================================*/


/* GLOBALS
=======================================*/
var thisApp = {
	data: [],
	voiceBox: '<div class="rt-voice" voice=""><div><img src=""><h2></h2><h4></h4></div><div><p></p></div></div>',
	navBox: '<div class="rt-voice" voice=""><div><h2></h2></div><div><h4></h4></div></div>', //variant change
	segBox: '<div class="rt-seg"><div class="rt-seg-voice"></div><div class="rt-seg-content"><h2></h2></div></div>',
	total: 0,
	populateSegs:function(total){
		var ii = 1;
		for (var i = 0 ; i < total-1 ; i++){
			jQuery('#rt-segs').append(this.segBox);
			jQuery('.rt-seg:eq('+i+') .rt-seg-voice').append(this.voiceBox);
			/* Ready segs */
			jQuery('.rt-seg:eq('+i+')').attr('voice', ii);
			jQuery('.rt-seg:eq('+i+') .rt-seg-content h2').text(thisApp.data[ii][4]);

			var split = thisApp.data[ii][5];
			split = split.split('|');

			for (var j = 0 ; j < split.length ; j++){
				jQuery('.rt-seg:eq('+i+') .rt-seg-content').append('<p>' + split[j] + '</p>');
			}
			ii += 1;
		}
	},
	populateBoxes: function(total){
		var ii = 0;
		for (var i = 1 ; i < total ; i++){
			jQuery('#rt-main .rt-voice:eq('+ii+')').attr('voice', i).on('click', function(){
				var thisVoice = jQuery(this).attr('voice');
				jQuery('#rt-main').animate({'opacity':'0'}, 1, function(){jQuery('#rt-main').remove();});
				jQuery('#rt-segs').add('.rt-seg[voice='+thisVoice+']').css('display','block');
				jQuery('#rt-nav').css('display','block');
				
			});

			jQuery('#rt-nav .rt-voice:eq('+ii+')').on('click', function(){
				var thisVoice = jQuery(this).attr('voice');
				jQuery('#toTop').click();
				jQuery('.rt-seg:not(.rt-seg[voice='+thisVoice+'])').css('display','none');
				jQuery('.rt-seg[voice='+thisVoice+']').css('display','block');
			})

			jQuery('#rt-main .rt-voice:eq('+ii+') img').add('#rt-nav .rt-voice:eq('+ii+') img').add('#rt-segs .rt-voice:eq('+ii+') img').attr('src', thisApp.data[i][3]);
			jQuery('#rt-main .rt-voice:eq('+ii+') h2').add('#rt-segs .rt-voice:eq('+ii+') h2').text(thisApp.data[i][0]);
			jQuery('#rt-main .rt-voice:eq('+ii+') h4').add('#rt-nav .rt-voice:eq('+ii+') h4').add('#rt-segs .rt-voice:eq('+ii+') h4').text(thisApp.data[i][1]);
			jQuery('#rt-nav .rt-voice:eq('+ii+') h2').text(thisApp.data[i][4]);
			jQuery('#rt-nav .rt-voice:eq('+ii+') h4').text(thisApp.data[i][0]);
			ii += 1;
		}
	},
	populateNav: function(total){
		var ii = 0;
		for (var i = 1 ; i < total ; i++){
			jQuery('#rt-nav').append(this.navBox);
			jQuery('#rt-nav .rt-voice:eq('+ii+')').attr('voice', i);
			ii += 1;
		}
	},
	createApp: function(){
		jQuery.getJSON('http://edsource.org/wp-content/iframe/podium/variants/mini-comms/data/data.json', function(d){
			thisApp.data = d;
			thisApp.total = thisApp.data.length;
			console.log(thisApp.total)
			for (var i=1 ; i < thisApp.total ; i++){
				jQuery('#rt-main').append(thisApp.voiceBox);			
			}

			thisApp.populateSegs(thisApp.total);
			thisApp.populateNav(thisApp.total);	
			thisApp.populateBoxes(thisApp.total);
			
		});			
	}
}

window.onload = function(){
	thisApp.createApp();
	console.log('hi')
}

jQuery(document).ready(function(){
	jQuery('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var jQuerytarget = jQuery(target);
	   	console.log(jQuery(document).height())


	    jQuery('html, body').stop().animate({
		     'scrollTop': jQuerytarget.offset().top
		}, 200, 'swing');
	});
});