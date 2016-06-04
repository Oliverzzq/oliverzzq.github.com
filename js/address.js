$(document).ready(function(){
	$(".baidu_map").hide();
	$("#search-button").click(function(){
		$(".baidu_map").show();
		var place,address;
		place=$("#place").val();
		address=$("#search-text").val();
		var map = new BMap.Map("map");    
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
		map.addControl(new BMap.NavigationControl());   
		map.addControl(new BMap.ScaleControl());    
		map.addControl(new BMap.OverviewMapControl());    
		map.addControl(new BMap.MapTypeControl());    
		map.setCurrentCity("北京"); 









		/*var map = new BMap.Map("myMap");  
		var local = new BMap.LocalSearch(map, {
					  pageCapacity: 8,
					  renderOptions: {
					    map: map,
					    panel: "result"
					  }
					});
		//map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
		map.addControl(new BMap.NavigationControl());   
		map.addControl(new BMap.ScaleControl());    
		map.addControl(new BMap.OverviewMapControl());    
		map.addControl(new BMap.MapTypeControl());    
		map.setCurrentCity(place); 
		var myGeo = new BMap.Geocoder();
		// 将地址解析结果显示在地图上，并调整地图视野    
		myGeo.getPoint(address, function(point) {
		  if (point) {
		    map.centerAndZoom(point, 16);
		    map.addOverlay(new BMap.Marker(point));
		  }
		}, place);
		  
		/*var local = new BMap.LocalSearch(map, {
		  renderOptions: {
		    map: map,
		    autoViewport: true
		  }
		});*/
		/*map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
		var myGeo = new BMap.Geocoder();
		将地址解析结果显示在地图上，并调整地图视野    
		myGeo.getPoint(address, function(point) {
		  if (point) {
		    map.centerAndZoom(point, 16);
		    map.addOverlay(new BMap.Marker(point));
		  }
		}, place);
		local.searchNearby("快餐",address);
		local.search(address);*/
	});
});