$("#contact-submit").click(function(){
	var name = $("#name").val();
	var gender = $("input[name='gender']:checked").val();
	var number = $("#number").val();
	var college = $("#college").val();
	var phone = $("#phone").val();
	var email = $("#email").val();
	var labType = $("input[name='labType']:checked").val();
	var deferToDistributionType = $("input[name='deferToDistributionType']:checked").val();
	var introduction = $("#introduction").val();
	alert(name + gender + number + college + phone + email + labType + deferToDistributionType + introduction);
	/*
	$.get("index.php/positions/data",{"dataType":"json",icao:micao},function(data,status){
	obj=eval(data);
	*/
	// $.get("http://dutse.avosapps.com/student/update",{"name":name,"gender":gender,"number":number,"college":college,"phone":phone,"email":email,"labType":labType,"deferToDistributionType":deferToDistributionType,"introduction":introduction,},function(data,status){
		$.get("http://dutse.avosapps.com/student/info",{name:name,gender:gender,number:number,college:college,phone:phone,email:email,labType:labType,deferToDistributionType:deferToDistributionType,introduction:introduction,},function(data,status){
		// obj=eval(data);
		// deleteOverlays();
		// $(obj).each(function(i){
		// 	markers[i]=new qq.maps.Marker({
		// 		position: new qq.maps.LatLng(obj[i]["lat"],obj[i]["lon"]),
		// 		map: map
		// 	});
		// });
	});
});
