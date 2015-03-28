$(document).ready(function(){
	$("#logInfo").hide();
	$("#signInfo").hide();
	$("#log").click(function(){
		$("#logInfo").toggle(800);
	});

	$("#sign").click(function(){
		$("#signInfo").toggle(800);
	});
});