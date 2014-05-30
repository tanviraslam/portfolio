(function($){ 
     $.fn.extend({  
         airport: function(array) {
			
			var self = $(this);
			var chars = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G',' ','h','H','i','I','j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R','s','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z','-'];
			var longest = 0;
			var items = items2 = array.length;

			function pad(a,b) { return a + new Array(b - a.length + 1).join(' '); }
			
			$(this).empty();
			
			while(items--)
				if(array[items].length > longest) longest = array[items].length;

			while(items2--)
				array[items2] = pad(array[items2],longest);
				
			spans = longest;
			while(spans--)
				$(this).prepend("<span class='c" + spans + "'></span>");
				
			
			function testChar(a,b,c,d){
				if(c >= array.length)
					setTimeout(function() { testChar(0,0,0,0); }, 1000);				
				else if(d >= longest)
					setTimeout(function() { testChar(0,0,c+1,0); }, 1000);
				else {
					$(self).find('.c'+a).html((chars[b]==" ")?"&nbsp;":chars[b]);
					setTimeout(function() {
						if(b > chars.length)
							testChar(a+1,0,c,d+1);
						else if(chars[b] != array[c].substring(d,d+1))
							testChar(a,b+1,c,d);
						else
							testChar(a+1,0,c,d+1);
					}, 2);
				}
			}
			
			testChar(0,0,0,0);
        } 
    }); 
})(jQuery);