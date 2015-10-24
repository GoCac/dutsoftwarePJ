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

	if (name == null || name.length() == 0){
		alert("姓名为空！");
		return;
	}
	if (number == null || number.length() == 0){
		alert("学号为空！");
		return;
	}
	if (college == null || college.length() == 0){
		alert("学院为空！");
		return;
	}
	if (phone == null || phone.length() == 0){
		alert("手机为空！");
		return;
	}
	if (email == null || email.length() == 0){
		alert("邮箱为空！");
		return;
	}
	if (introduction == null || introduction.length() == 0){
		alert("个人介绍为空！");
		return;
	}
	if (introduction.length() > 200){
		alert("个人介绍超过200字！");
		return;
	}

	alert("姓名：" + name + "\n" + "性别(0男/1女)：" + gender + "\n" + "学号：" + number + "\n" + "学院：" + college + "\n" + "手机：" + phone + "\n" + "邮箱：" + email + "\n" + "实验室(0,1,2,3)：" + labType + "\n" + "是否接受调剂(0否/1是)：" + deferToDistributionType + "\n" + "个人介绍：" + introduction + "\n" );
	/*
	$.get("index.php/positions/data",{"dataType":"json",icao:micao},function(data,status){
	obj=eval(data);
	*/
	// $.get("http://dutse.avosapps.com/student/update",{"name":name,"gender":gender,"number":number,"college":college,"phone":phone,"email":email,"labType":labType,"deferToDistributionType":deferToDistributionType,"introduction":introduction,},function(data,status){
		$.get("http://dutse.avosapps.com/student/update",{name:name,gender:gender,number:number,college:college,phone:phone,email:email,labType:labType,deferToDistributionType:deferToDistributionType,introduction:introduction,},function(data,status){
		alert(status);
		if (status == "succeed") {
			alert("提交成功");
		};
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
