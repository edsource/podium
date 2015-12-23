
/* GLOBALS
=======================================*/
var podiumApp = {
	interaction: function(){
		total = jQuery('#rt-main .rt-voice').size();
		for (var i = 0 ; i < total ; i++){
			jQuery('#rt-main .rt-voice:eq('+i+')').attr('voice', i).on('click', function(){
				var thisVoice = jQuery(this).attr('voice');
				jQuery('#rt-main').animate({'opacity':'0'}, 1, function(){jQuery('#rt-main').remove();});
				jQuery('#rt-segs').add('.rt-seg[voice='+thisVoice+']').css('display','block');
				jQuery('#rt-nav').css('display','block');
				
			});

			jQuery('#rt-nav .rt-voice:eq('+i+')').on('click', function(){
				var thisVoice = jQuery(this).attr('voice');
				jQuery('#toTop').click();
				jQuery('.rt-seg:not(.rt-seg[voice='+thisVoice+'])').css('display','none');
				jQuery('.rt-seg[voice='+thisVoice+']').css('display','block');
			})
		}
	}
}

podiumApp.interaction();

jQuery(document).ready(function(){
	jQuery('#rt-nav .rt-voice').on('click',function (e) {
		e.preventDefault();
	  	jQuery('html, body').animate({
	        scrollTop: jQuery("#top").offset().top
	    }, 500);
	});
});