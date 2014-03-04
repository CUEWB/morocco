/* on DOM-ready, set up scroll behavior and load current year */
$(document).ready(function() {
    scrollToAnchor();
    selectOnScroll();
    loadPhotos();
    setupButtons();
    loadYear();
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
            if (direction === "down") {
                $('#nav-menu li.selected').removeClass('selected');
                $('#nav-menu li a[href="' + id +'"]').parent()
                                                     .addClass('selected');
            }
            else if (direction === "up" && id !== "#home") {
                $('#nav-menu li.selected').removeClass('selected');
                $('#nav-menu li a[href="' + id +'"]').parent().prev()
                                                     .addClass('selected');
            }
        });
    });
}

/* set up photo galleries */
function loadPhotos() {
    $("#water .section-photos .display-image").gallery({
        source: "#water .section-photos img",
        selectClass: "shown",
        showCaptions: true,
        captionTarget: "#water .section-photos .image-caption",
        waitTime: 7000
    });
    $("#bridge .section-photos .display-image").gallery({
        source: "#bridge .section-photos img",
        selectClass: "shown",
        showCaptions: true,
        captionTarget: "#bridge .section-photos .image-caption",
        waitTime: 7000
    }); 
}
    

/* initialize buttons */
function setupButtons() {
    $(".donate-button").click(function() {
        window.open("https://ssl.charityweb.net/ewbusa/?Custom4=9041", "_blank");
    });
}

/* load current year into .year tags */
function loadYear() {
    var date = new Date();
    $('.year').text(date.getFullYear());
}