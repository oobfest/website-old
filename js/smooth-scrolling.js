// From https://css-tricks.com/snippets/jquery/smooth-scrolling/

$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		var isCorrectPathname = (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, ''))
		var isCorrectHostname = location.hostname == this.hostname
		if(isCorrectPathname && isCorrectHostname) {
			var target = $(this.hash)
			target = target.length 
				? target 
				: $('[name=' + this.hash.slice(1) + ']')
			if (target.length) {
				event.preventDefault()
				$('html, body').animate({
					scrollTop: target.offset().top
					}, 750, function() {
						var $target = $(target)
						$target.focus()
						if ($target.is(":focus")) {return false} 
						else {
							$target.attr('tabindex','-1')
							$target.focus()
						}
				})
			}
		}
	})