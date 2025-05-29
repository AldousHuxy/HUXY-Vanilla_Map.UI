require(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'], function(Map, MapView, FeatureLayer) {
    const map = new Map({
        basemap: 'arcgis-topographic',
        layers: [
            // MHFD Boundary
            new FeatureLayer({ url: 'https://gis.mhfd.org/server/rest/services/Hosted/MHFD_Boundary/FeatureServer/0' }),
            // Mask Boundary
            new FeatureLayer({ url: 'https://gis.mhfd.org/server/rest/services/Hosted/MaskBoundary/FeatureServer/1' }), // Counties Local Governments
            new FeatureLayer({ url: 'https://gis.mhfd.org/server/rest/services/Hosted/MaskBoundary/FeatureServer/2' }), // Colorado
            // Effective Model Reaches
            new FeatureLayer({ url: 'https://services3.arcgis.com/TCnvslgqrzhT2ZXG/arcgis/rest/services/EffectiveModelReaches/FeatureServer/0' })
        ]
    })

    const mapView = new MapView({
        map,
        container: 'map',
        center: [-104.9848344147008, 39.73940124450646],
        zoom: 10
    })

    esriConfig.apiKey = ''
})