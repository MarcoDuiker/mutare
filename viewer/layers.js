var layers = [
        {
        "id": "hobhouse",
        "name": "Hobhouses",
        "type": "geoJSON",
        "cluster": true,
        "showCoverageOnHover": false,
        "maxZoom": 22,
        "url": "./data/hobhouse.geojson",
        "icon": {
            "iconUrl": "./img/theater.png",
            "iconSize": [24,28]
            },
        "style": {
        "stroke": true,
        "fillColor": "#00FFFF",
        "fillOpacity": 0.5,
        "radius": 10,
        "weight": 0.5,
        "opacity": 1,
        "color": '#727272',
            },
        "visible": false,
          // "label": {
          // 	"name": "NAME",
          // 	"minZoom": 14
          // }
        },
        {
			"id": "waterbodies",
			"name": "Water bodies",
			"type": "wmsTiledLayer",
			"url": "https://geoserver.digitalearth.africa/geoserver/waterbodies/wms",
			"layers": "waterbodies:DEAfrica_Waterbodies",
			'EPSG': 4326,
            "maxZoom": 22,
            "visible": true,
            "format": 'image/png',
            "transparent": true
        }
	];
