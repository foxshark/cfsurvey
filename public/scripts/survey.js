$(document).ready(function(){
	$('#step_1').click(function() {
        $('#survey_options').hide();
        $('#survey_email').show();
    });

	//prevent user from going to step 2 until they make an image selection
	$('input:radio[name="images"]').change(function(){
	    $('#step_1').prop("disabled", false);
	});
});


//classic jQuery validation plugin
$("#survey_form").validate({
	rules: {
		images: {
			required: true
		},
		email_address: {
			required: true,
			email: true, //Regex based email validation
			normalizer: function(value) {
				return $.trim(value);
			}
		}
	},
	wrapper: 'div'
});	

$("#survey_form").submit(function(e){
	//we will handle form submission via an AJAX call below
    e.preventDefault();
    //make sure form is valid before submitting!
    if($("#survey_form").valid()) {
    	//Build the JSON array with only needed data, unlike $("#survey_form").serializeArray();
		//Other parameters might include API keys, GET tracking variables, etc 
		var formData = {
	    	"imageSelection" : $("input[type=radio]:checked" ).val(),
	    	"emailAddress" : $("input[type=text][name=email_address]").val()
	    };

	    var serialData = JSON.stringify(formData);

	    //send via post to an endpoint
	    $.post("/demo", serialData)
	    	//todo in a real app, we would have different for various cases
	    	//todo build failed case that would log and retry ajax call
			.done(function(data, status) {
				//todo call success function
				//todo prompt further action, such as make an account 
				console.log("Response Status: " + status);
				completeSurvey();
			}); 
    }
});

function completeSurvey()
{
	$('form#survey_form').hide();
	$('#thankyou').show();
}