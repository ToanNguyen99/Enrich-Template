
//var site = site || {};
//site.baseUrl = app_base || "";

jQuery(document).ready(function (e) {

	// locate each partial section.
	// if it has a URL set, load the contents into the area.

	jQuery(".partialContents").each(function (index, item) {
		var url = jQuery(item).data("url");
		//alert(url);
		if (url && url.length > 0) {
			jQuery(item).load(url);
		}
	});


});
