$("#contact-submit").click(function(){
	var name = $("#name").val();
	var gender = 0;
		if ($("#female").val() == 'checked'){
			gender = 1;
		}
	var number = $("#number").val();
	var college = $("#college").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var introduction = $("#introduction").val();
	alert(name + gender + $("#female").val() + number + college + phone + email + introduction);
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
