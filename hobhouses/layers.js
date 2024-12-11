var tocCategories = [
        {
            "name": "GeoJSON layers",
            "layers": ["hobhouse"]
        },
        {
            "name": "WMS layers",
            "layers": ["waterbodies"],
            "exclusive": false
        }
    ];


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
          //    "name": "NAME",
          //    "minZoom": 14
          // }
        },
        {
            "id": "waterbodies",
            "name": "Water bodies",
            "type": "wmsTiledLayer",
            "url": "https://geoserver.digitalearth.africa/geoserver/waterbodies/wms",
            "layers": "waterbodies:DEAfrica_Waterbodies",
            "identify": {
                //"layerName": "layer name", Not really neccesary, already defined.
                //"layerLabel": "layer label", uncomment to override id and name as defined on the layer.
                //"primaryField": "wb_id", Uncomment this to get a heading based on the value of this field.
                /* Uncomment this to restrict output and or launder output with alias, decimals, prefix, etc.
                  "outFields": [
                        {"name": "field_name", "alias": "Field Alias", "prefix": "$"},
                        {"name": "field alias", "thousands": true, "decimals": 2}
                    ],
                */ 
               /*
                "outFields": [
                        {"name": "wb_id", "alias": "Identification"},
                        {"name": "area_m2", "alias": "area"}
                    ]
                */
                
            },
            "geomField" : "geometry",
            "queryWidget": {
                "queries" : [
                    {"name": "area_m2", "alias": "area", "type": "numeric"}
                ],
                "outFields": [
                    {"name": "area_m2", "alias": "area"},
                    {"name": "wb_id", "alias": "identification"},
                    {"name": "last_valid_obs_date", "alias": "last valid observation date"}
                ]
            },
            'EPSG': 4326,
            "maxZoom": 22,
            "visible": true,
            "format": 'image/png',
            "transparent": true,
            "showHighlight": true
        }
    ];
    
var  basemaps = ['OpenStreetMap'];
