	$(function() {
$( "#accordion" ).accordion({event:"mouseover",autoHeight:false});
$( "#accordion1" ).accordion({event:"mouseover",autoHeight:false});
$( "#accordion2" ).accordion({event:"mouseover",autoHeight:false});
 
  $("#progress").progressbar({ change: function() { 
    $("#amount").text($("#progress").progressbar("option", "value") + "%");
  } });
  $("#next").click(function(e) {
  e.preventDefault();  
  $(".form-panel").each(function() {    
 if ($(this).attr("id") != "panel1")  $("#back").prop("disabled", false);
	($(this).hasClass("ui-helper-hidden")) ? null : $(this).fadeOut("fast", function() {
	  $(this).addClass("ui-helper-hidden").next().fadeIn("fast", function() {
    	    ($(this).attr("id") != "thanks") ? null : $("#next").attr("disabled", "disabled");
				    $(this).removeClass("ui-helper-hidden");	    
	    $("#progress").progressbar("option", "value", $("#progress").progressbar("option", "value") + 25);
	  });
      });
    });
  });
$("#back").click(function(e) {	
  e.preventDefault();
  $(".form-panel").each(function() {
  if ($(this).attr("id") != "thanks")  $("#next").prop("disabled", false);
    ($(this).hasClass("ui-helper-hidden")) ? null : $(this).fadeOut("fast", function() {
      $(this).addClass("ui-helper-hidden").prev().fadeIn("fast", function() {
    	  ($(this).attr("id") != "panel1") ? null : $("#back").attr("disabled", "disabled");
	  $(this).removeClass("ui-helper-hidden");
	  $("#progress").progressbar("option", "value", $("#progress").progressbar("option", "value") - 25);
      });
    });
  });
});
});
function validate_form ( )
{	
	if ( document.contact_form.a.checked == false )
        {
                alert ( "Пожалуйста, дайте согласие на передачу данных." );
                valid = false;
        }
	var p= /(\+\d)/;
	if(!p.test(document.contact_form.phone.value))
	{			
				alert ( "Пожалуйста, введите правильный номер телефона." );
                valid = false;
	}	
        return valid;
}
