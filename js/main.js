$(function () {
	$("#header").find(".dropdown-menu a").click(function () {
		var href = $(this).attr("data-tab");
		$("#tablist").find("a[href=" + href + "]").tab("show");
	});
});