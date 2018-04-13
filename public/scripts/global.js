$(document).ready(function(){
	$('#privacy').click(function() {
        $('#gdrp_terms').show();
        $(this).hide();
    });

    $('label.email').click(function() {
        $('.email_disclaimer').show();
    });
});