require(['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'], function(Map, MapView, FeatureLayer) {
    const stateCapital = [-104.9848344147008, 39.73940124450646]
    const mhfdBoundary = new FeatureLayer({ url: 'https://gis.mhfd.org/server/rest/services/Hosted/MHFD_Boundary/FeatureServer/0' })
    const effectiveModels = new FeatureLayer({ url: 'https://services3.arcgis.com/TCnvslgqrzhT2ZXG/arcgis/rest/services/EffectiveModelReaches/FeatureServer/0' })

    const map = new Map({
        basemap: 'arcgis-topographic',
        layers: [mhfdBoundary, effectiveModels]
    })

    const mapView = new MapView({
        container: 'map',
        map: map,
        center: stateCapital,
        zoom: 10
    })

    esriConfig.apiKey = 'AAPTxy8BH1VEsoebNVZXo8HurLdCsuMo_G6ornA5kxEPlcYFbaedFCoXmqlgT8PjyqGhfN2eAbR6LdCSMUWXYZ5nudCkF2iYIcDW84eZ1i7GaPxuw6UsveGcEONjpTV8ePbX6XRX0tHRnfqxFsXTYGESBaVcuGECdFrZkk0ntbk2VZbssera65qjlrjLmU63j0oIlabX7owLQzPEMnVg7NmHkV7qR9QjpGLBM8uAuC5QQmg.AT1_L9ge3M8d'
})