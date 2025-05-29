require([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/FeatureLayer',
  'esri/identity/IdentityManager',
  'esri/request'
], function(Map, MapView, FeatureLayer, IdentityManager, esriRequest) {
  // Set your credentials
  const username = 'YOUR_USERNAME';
  const password = 'YOUR_PASSWORD';
  const portalUrl = 'https://www.arcgis.com/sharing/rest';

  // Get a token using username/password
  esriRequest(portalUrl + '/generateToken', {
    method: 'post',
    query: {
      username: username,
      password: password,
      client: 'referer',
      referer: window.location.origin,
      expiration: 60,
      f: 'json'
    }
  }).then(function(response) {
    const token = response.data.token;
    IdentityManager.registerToken({ server: portalUrl, token: token, userId: username });

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
      container: 'map',
      map: map,
      center: [-104.9848344147008, 39.73940124450646],
      zoom: 10
    })

    esriConfig.apiKey = 'AAPTxy8BH1VEsoebNVZXo8HurLdCsuMo_G6ornA5kxEPlcYFbaedFCoXmqlgT8PjyqGhfN2eAbR6LdCSMUWXYZ5nudCkF2iYIcDW84eZ1i7GaPxuw6UsveGcEONjpTV8ePbX6XRX0tHRnfqxFsXTYGESBaVcuGECdFrZkk0ntbk2VZbssera65qjlrjLmU63j0oIlabX7owLQzPEMnVg7NmHkV7qR9QjpGLBM8uAuC5QQmg.AT1_L9ge3M8d'
  });
});