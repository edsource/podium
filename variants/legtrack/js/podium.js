/* VARIANT NOTES

 - title only navigation along the side

=======================================*/


/* GLOBALS
=======================================*/
var thisApp = {
	data: [],
	voiceBox: '<div class="rt-voice" voice=""><div><img src=""><h2></h2><h4></h4></div><div><p></p></div></div>',
	navBox: '<div class="rt-voice" voice=""><div><h2></h2></div></div>', //variant change
	segBox: '<div class="rt-seg"><div class="rt-seg-voice"></div><div class="rt-seg-content"><h2></h2></div></div>',
	total: 0,
	populateSegs:function(total){
		var ii = 1;
		for (var i = 0 ; i < total-1 ; i++){
			$('#rt-segs').append(this.segBox);
			$('.rt-seg:eq('+i+') .rt-seg-voice').append(this.voiceBox);
			/* Ready segs */
			$('.rt-seg:eq('+i+')').attr('voice', ii);
			$('.rt-seg:eq('+i+') .rt-seg-content h2').text(thisApp.data[ii][4]);

			var split = thisApp.data[ii][5];
			split = split.split('|');

			for (var j = 0 ; j < split.length ; j++){
				$('.rt-seg:eq('+i+') .rt-seg-content').append('<p>' + split[j] + '</p>');
			}
			ii += 1;
		}
	},
	populateBoxes: function(total){
		var ii = 0;
		for (var i = 1 ; i < total ; i++){
			$('#rt-main .rt-voice:eq('+ii+')').attr('voice', i).on('click', function(){
				var thisVoice = $(this).attr('voice');
				$('#rt-main').animate({'opacity':'0'}, 1000, function(){$('#rt-main').remove();});
				$('#rt-segs').add('.rt-seg[voice='+thisVoice+']').fadeIn(1000, function(){
					$('#rt-nav').fadeIn(200);
				});
			});

			$('#rt-nav .rt-voice:eq('+ii+')').on('click', function(){
				var thisVoice = $(this).attr('voice');
				$('.rt-seg:not(.rt-seg[voice='+thisVoice+'])').fadeOut(1);
				$('.rt-seg[voice='+thisVoice+']').fadeIn(500);
			})

			$('#rt-main .rt-voice:eq('+ii+') img').add('#rt-nav .rt-voice:eq('+ii+') img').add('#rt-segs .rt-voice:eq('+ii+') img').attr('src', thisApp.data[i][3]);
			$('#rt-main .rt-voice:eq('+ii+') h2').add('#rt-nav .rt-voice:eq('+ii+') h2').add('#rt-segs .rt-voice:eq('+ii+') h2').text(thisApp.data[i][0]);
			$('#rt-main .rt-voice:eq('+ii+') h4').add('#rt-nav .rt-voice:eq('+ii+') h4').add('#rt-segs .rt-voice:eq('+ii+') h4').text(thisApp.data[i][1]);
			ii += 1;
		}
	},
	populateNav: function(total){
		var ii = 0;
		for (var i = 1 ; i < total ; i++){
			$('#rt-nav').append(this.navBox);
			$('#rt-nav .rt-voice:eq('+ii+')').attr('voice', i);
			ii += 1;
		}
	},
	createApp: function(){
		$.getJSON('data/data.json', function(d){
			thisApp.data = d;
			thisApp.total = thisApp.data.length;
			console.log(thisApp.total)
			for (var i=1 ; i < thisApp.total ; i++){
				$('#rt-main').append(thisApp.voiceBox);			
			}

			thisApp.populateSegs(thisApp.total);
			thisApp.populateNav(thisApp.total);	
			thisApp.populateBoxes(thisApp.total);
			
		});			
	}
}


window.onload = function(){
	thisApp.createApp();
}