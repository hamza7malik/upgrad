var map, map1;
function initMap() {
	
	if( jQuery('#map').length > 0 ) {
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 25.03908894002936, lng: 55.16579269664045},
			zoom: 18,
			styles: [
			  {elementType: 'geometry', stylers: [{color: '#2A2A2A'}]},
			  {elementType: 'labels.text.stroke', stylers: [{color: '#2A2A2A'}]},
			  {elementType: 'labels.text.fill', stylers: [{color: '#f1f1f1'}]},
			  {
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d3632a'}]
			  },
			  {
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d3632a'}]
			  },
			  {
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{color: '#263c3f'}]
			  },
			  {
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{color: '#fefefe'}]
			  },
			  {
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#1F1F1F'}]
			  },
			  {
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{color: '#212a37'}]
			  },
			  {
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{color: '#fefefe'}]
			  },
			  {
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{color: '#1F1F1F'}]
			  },
			  {
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{color: '#1f2835'}]
			  },
			  {
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{color: '#f3d19c'}]
			  },
			  {
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{color: '#1c1c1c'}]
			  },
			  {
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}]
			  },
			  {
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{color: '#1f1f1f'}]
			  },
			  {
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{color: '#515c6d'}]
			  },
			  {
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{color: '#1f1f1f'}]
			  }
			]
		  });
	  
		  var marker = new google.maps.Marker({
			  map:map,
			  position: new google.maps.LatLng(25.03908894002936, 55.16579269664045),
			//   icon: 'img/marker.png' // null = default icon
			icon: vivo.themeUrl+'/assets/img/marker.png' // null = default icon
			});
	  
			marker.addListener('click', function() {
			  window.open('https://goo.gl/maps/yQ6D1fdzjisxDiyo8','_blank');
			});	
	}

	if( jQuery('#map1').length > 0 ) {
		var map1 = new google.maps.Map(document.getElementById('map1'), {
			center: {lat: 25.03908894002936, lng: 55.16579269664045},
			zoom: 18,
			styles: [
				{elementType: 'geometry', stylers: [{color: '#2A2A2A'}]},
				{elementType: 'labels.text.stroke', stylers: [{color: '#2A2A2A'}]},
				{elementType: 'labels.text.fill', stylers: [{color: '#f1f1f1'}]},
			  {
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d3632a'}]
			  },
			  {
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d3632a'}]
			  },
			  {
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{color: '#263c3f'}]
			  },
			  {
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{color: '#fefefe'}]
			  },
			  {
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#1F1F1F'}]
			  },
			  {
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{color: '#212a37'}]
			  },
			  {
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{color: '#fefefe'}]
			  },
			  {
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{color: '#1F1F1F'}]
			  },
			  {
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{color: '#1f2835'}]
			  },
			  {
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{color: '#f3d19c'}]
			  },
			  {
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{color: '#1c1c1c'}]
			  },
			  {
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{color: '#d59563'}]
			  },
			  {
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{color: '#1f1f1f'}]
			  },
			  {
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{color: '#515c6d'}]
			  },
			  {
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{color: '#1f1f1f'}]
			  }
			]
		  });
		
	
		  var marker1 = new google.maps.Marker({
			map:map1,
			position: new google.maps.LatLng(25.03908894002936, 55.16579269664045),
			//   icon: 'img/marker.png' // null = default icon
			icon: vivo.themeUrl+'/assets/img/marker.png' // null = default icon
		  });
		
		marker1.addListener('click', function() {
			window.open('https://goo.gl/maps/yQ6D1fdzjisxDiyo8','_blank');
		  });	
	}
	
	
	
	}