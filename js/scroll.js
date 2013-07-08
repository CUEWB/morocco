/* on DOM-ready, set up scroll behavior */
$(document).ready(function() {
    scrollToAnchor();
    selectOnScroll();
});


/* make same-page anchor links scroll to section instead of jump */
function scrollToAnchor(){
	$('a[href^="#"]').each(function() {
	    var id = $(this).attr('href');
	    $(this).click(function(e) {
	        e.preventDefault();
            $('html,body').animate({scrollTop: $(id).offset().top+1},'slow');
        });
    });
}

/* select the appropriate navbar item on scroll */
function selectOnScroll() {
    $('#nav-menu li a').each(function() {
        var id = $(this).attr('href');
        $(id).waypoint(function(direction) {
            if (direction == "down") {
                $('#nav-menu li.selected').removeClass('selected');
                $('#nav-menu li a[href="' + id +'"]').parent().addClass('selected');
            }
            else if (direction == "up" && id != "#home") {
                $('#nav-menu li.selected').removeClass('selected');
                $('#nav-menu li a[href="' + id +'"]').parent().prev().addClass('selected');
            }
        });
    });
}