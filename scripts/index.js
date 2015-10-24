$("#contact-submit").click(function(){
	var name = $("#name").val();
	var gender = 0;
	if ($("#male").attr("checked") == checked){
		gender = 0;
	}
	alert($("#male").attr("checked"));
	/*
	$.get("index.php/positions/data",{"dataType":"json",icao:micao},function(data,status){
	obj=eval(data);
	*/
	// $.get("data",{"dataType":"json",icao:micao},function(data,status){
	// 	obj=eval(data);
	// 	deleteOverlays();
	// 	$(obj).each(function(i){
	// 		markers[i]=new qq.maps.Marker({
	// 			position: new qq.maps.LatLng(obj[i]["lat"],obj[i]["lon"]),
	// 			map: map
	// 		});
	// 	});
	// });
});
