(function($){
	
	$.fn.placeholders = function (){	
	
		// This will store the defaults value
		var defaults = {}
	
		// First off, we check it's IE
		if ( $.browser.msie ){
			
			// And we go each through input
			$('input[type=text]').each(function(){
				
				// If the placeholder is set, we save the default value and save it to the input
				if ( $(this).attr('placeholder') != undefined && $(this).val() == '' ){					
					defaults[$(this).attr('id')] = $(this).attr('placeholder');		
					$(this).val($(this).attr('placeholder'));		
				}
				
				// Then we bind both events on the input, so mouse over cleans
				// And we the user leaves the field, is it's empty, it restores it's default vale
				$(this).bind({
					focusin: function(){
					
							if ( defaults[$(this).attr('id')] != undefined &&
								$(this).val() == defaults[$(this).attr('id')] ){
									
									$(this).val('');
									
								}
						},
					focusout: function(){
						
						if ( defaults[$(this).attr('id')] != undefined &&
						$(this).val() == '' ){
							
							$(this).val(defaults[$(this).attr('id')]);
							
						}
						
					}
					
				})
				
			})
			
		}
			
	}
	
})(jQuery)