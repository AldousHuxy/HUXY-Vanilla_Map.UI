require([ "esri/WebMap", "esri/views/MapView", "esri/widgets/LayerList" ], function(WebMap, MapView, LayerList) {
    const map = new WebMap({ portalItem: { id: "4745aa2fa3f3422dbe0c510b3c630a6d"}})

    const view = new MapView({ container: "viewDiv", map })

    view.when(function() {
        const layerList = new LayerList({ view })
        
        view.ui.add(layerList, "top-right")
    })
})