// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require handlebars.runtime
//= require_tree ./templates
//= require_tree .

$(document).on('ready page:load', function(){

	$("#cbtn").on('click',function(e){
		e.preventDefault();
		$(".meets").hide();
		$("#invites").hide();
		$("#profile").hide();
		$("#contacts").show();
		$("#contact").html("");
      $.get("/getcontacts.json").done(function(data){
          $(data).each(function(index, contact){
            var contactHTML = HandlebarsTemplates.contacts(contact);
              $("#contact").append(contactHTML);
          });
      });
	});
  $("#contact").click(function(e){
    e.preventDefault();
    $(".ind").css("color","yellow");
  });

	$("#ebtn").on('click',function(e){
		e.preventDefault();
		$("#contacts").hide();
		$("#invites").hide();
		$("#profile").hide();
		$(".meets").show();
	});
	$("#ibtn").on('click',function(e){
		e.preventDefault();
		$("#contacts").hide();
		$(".meets").hide();
		$("#profile").hide();
		$("#invites").show();
		$("#outgoing").show();
		$("#incoming").hide();
	});
	$("#pbtn").on("click", function(e){
		e.preventDefault();
		$("#contacts").hide();
		$("#invites").hide();
		$(".meets").hide();
		$("#profile").show();
	});
	$("#pbtn").on("click", function(e){
		e.preventDefault();
		$("#contacts").hide();
		$("#invites").hide();
		$(".meets").hide();
		$("#profile").show();
	});
	$("#inc").on('click',function(e){
		e.preventDefault();
		$("#outgoing").hide();
		$("#incoming").show();
	});
	$("#out").on('click',function(e){
		e.preventDefault();
		$("#incoming").hide();
		$("#outgoing").show();
	});

});
