<script type="text/javascript">
$("#contact-submit").click(function(){
				var micao=$("#name").val();
				alert(micao);
				/*
				$.get("index.php/positions/data",{"dataType":"json",icao:micao},function(data,status){
					obj=eval(data);
					*/
				// $.get("data",{"dataType":"json",icao:micao},function(data,status){
				// 	obj=eval(data);
				// deleteOverlays();
				// $(obj).each(function(i){
				// 	markers[i]=new qq.maps.Marker({
				// 		position: new qq.maps.LatLng(obj[i]["lat"],obj[i]["lon"]),
				// 		map: map
				// 	});
				// });
			 //  });
});
</script>
