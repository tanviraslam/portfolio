$(document).ready(function(){
	changeJobDesc();
	var s = skrollr.init();
	//Hover on tiles. Refactor this.
	$('.about').hover(function(){
		$(this).find('.tile').removeClass('bg-darkPink').addClass('bg-emerald');
		$(this).find('.tile-content,.tile-status').hide();
		$(this).find('.summary').removeClass('hidden');
	}, function(){
		$(this).find('.tile').removeClass('bg-emerald').addClass('bg-darkPink');
		$(this).find('.tile-content,.tile-status').show();
		$(this).find('.summary').addClass('hidden');
	});

	$('.portfolio').hover(function(){
		$(this).find('.tile').removeClass('bg-teal').addClass('bg-mauve');
		$(this).find('.tile-content,.tile-status').hide();
		$(this).find('.summary').removeClass('hidden');
	}, function(){
		$(this).find('.tile').removeClass('bg-mauve').addClass('bg-teal');
		$(this).find('.tile-content,.tile-status').show();
		$(this).find('.summary').addClass('hidden');
	});

	$('.resume').hover(function(){
		$(this).find('.tile').removeClass('bg-lime').addClass('bg-darkTeal');
		$(this).find('.tile-content,.tile-status').hide();
		$(this).find('.summary').removeClass('hidden');
	}, function(){
		$(this).find('.tile').removeClass('bg-darkTeal').addClass('bg-lime');
		$(this).find('.tile-content,.tile-status').show();
		$(this).find('.summary').addClass('hidden');
	});

	$('.blog').hover(function(){
		$(this).find('.tile').removeClass('bg-lightRed').addClass('bg-violet');
		$(this).find('.tile-content,.tile-status').hide();
		$(this).find('.summary').removeClass('hidden');
	}, function(){
		$(this).find('.tile').removeClass('bg-violet').addClass('bg-lightRed');
		$(this).find('.tile-content,.tile-status').show();
		$(this).find('.summary').addClass('hidden');
	});

	//Vertical Menu hover and click features.
	$('.nav ul li').hover(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).find('i').stop().animate({
			'left' : "-20%"
		},500, function(){
			$(this).parent().next().removeClass('hidden').fadeIn();
		});
	}, function(){
		$(this).find('.tile-status').fadeOut('fast').addClass('hidden');
		$(this).find('i').stop().animate({
			'left' : "50%"
		},500);
	});

	//Smooth Scroll
	$('a[href^="#"]').click(function(e){
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);
		
		$('html,body').stop().animate({
			'scrollTop' : $target.offset().top
		}, 1500, 'swing', function(){
			window.location.hash = target;
		});
	});
});

function changeJobDesc(){
	var jobDesc =['Front End Developer', 'Product Designer', 'UI+UX Apprentice'];
	$('.my-title h3').airport(jobDesc);
}

