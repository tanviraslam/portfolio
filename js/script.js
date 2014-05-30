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

	//When any page other than home comes into focus
	// $('#about,#portfolio,#resume,#blog,#contact').focus(function(event) {
	// 	$(this).prepend($('.nav').removeClass('hidden').html());
	// });
});

function changeJobDesc(){
	var jobDesc =['Front End Developer', 'Product Designer', 'UI+UX Apprentice'];
	$('.my-title h3').airport(jobDesc);
}

