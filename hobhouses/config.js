var config = {
    "requireArcGISLogin": false, // Does the user need to log in to ArcGIS Online or ArcGIS Server?
    "tokenUrl": 'https://www.arcgis.com/sharing/generateToken', // ArcGIS token generation URL

    "title": "Mutare GIS Viewer",
    "start": {
        "maxZoom": 22,
        "center": [-18.979,32.66],
        "zoom": 12,
        "attributionControl": true,
        "zoomControl": false
    },
    "about": {
        "title": "Mutare GIS Viewer",
        "contents": "<p>This is a proof-of-concept viewer for the city of Mutare</p>"
    },
    "controls": {
        "zoom": {
            "position": "topleft"
        },
        "leafletGeocoder": {
            //https://github.com/perliedman/leaflet-control-geocoder
            "collapsed": false,
            "position": "topleft",
            "placeholder": "Search for a location",
            "type": "OpenStreetMap", // OpenStreetMap, Google, ArcGIS
            "suffix": "Mutare Zimbabwe", // optional keyword to append to every search
            //"key": "AIzaS....sbW_E", // when using the Google geocoder, include your Google Maps API key (https://developers.google.com/maps/documentation/geocoding/start#get-a-key)
        },
        "TOC": {
            //https://leafletjs.com/reference-1.0.2.html#control-layers-option
            "collapsed": true,
            "uncategorisedLabel": "Layers",
            "position": "topright",
            "toggleAll": false
        },
        "history": {
            "position": "bottomleft"
        }
    },

    "activeTool": "identify", // options are identify/coordinates/queryWidget
    "basemaps": basemaps,
    "bing_key": "enter your Bing Maps key",
    "tocCategories": tocCategories,
    "projections": [
        {4326: '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs' },
        {3857: '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs'}
    ],
    "highlightStyle": {
        "weight": 2,
        "opacity": 1,
        "color": 'white',
        "dashArray": '3',
        "fillOpacity": 0.5,
        "fillColor": '#E31A1C',
        "stroke": true
    },
    "layers": layers
}
