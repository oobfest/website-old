$(document).ready(function() {
    $(window).scroll(function(){
        $('.hide-me').each(function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight()
            var bottom_of_window = $(window).scrollTop() + $(window).height()
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1500)
            }
        })
    })
})

// In case they load the page having the element already in view
$('.hide-me').each(function(i){
	var bottom_of_object = $(this).position().top + $(this).outerHeight()
	var bottom_of_window = $(window).scrollTop() + $(window).height()
	if( bottom_of_window > bottom_of_object ){
		$(this).animate({'opacity':'1'},1500)
	}
})