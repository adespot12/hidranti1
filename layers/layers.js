var wms_layers = [];

var lyr_OIOrthoimageCoverage_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoportal.dgu.hr/services/inspire/orthophoto_lidar_2022_2023/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'OI.OrthoimageCoverage',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OIOrthoimageCoverage_0, 0]);
var format_T_HIDRANT_1 = new ol.format.GeoJSON();
var features_T_HIDRANT_1 = format_T_HIDRANT_1.readFeatures(json_T_HIDRANT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_HIDRANT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_HIDRANT_1.addFeatures(features_T_HIDRANT_1);
var lyr_T_HIDRANT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_HIDRANT_1, 
                style: style_T_HIDRANT_1,
                popuplayertitle: 'T_HIDRANT',
                interactive: true,
                title: '<img src="styles/legend/T_HIDRANT_1.png" /> T_HIDRANT'
            });
var format_NASELJE_2 = new ol.format.GeoJSON();
var features_NASELJE_2 = format_NASELJE_2.readFeatures(json_NASELJE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NASELJE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NASELJE_2.addFeatures(features_NASELJE_2);
var lyr_NASELJE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NASELJE_2, 
                style: style_NASELJE_2,
                popuplayertitle: 'NASELJE',
                interactive: false,
                title: 'NASELJE'
            });
var format_ADDRESS_3 = new ol.format.GeoJSON();
var features_ADDRESS_3 = format_ADDRESS_3.readFeatures(json_ADDRESS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADDRESS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADDRESS_3.addFeatures(features_ADDRESS_3);
var lyr_ADDRESS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADDRESS_3, 
                style: style_ADDRESS_3,
                popuplayertitle: 'ADDRESS',
                interactive: true,
                title: '<img src="styles/legend/ADDRESS_3.png" /> ADDRESS'
            });

lyr_OIOrthoimageCoverage_0.setVisible(true);lyr_T_HIDRANT_1.setVisible(true);lyr_NASELJE_2.setVisible(true);lyr_ADDRESS_3.setVisible(false);
var layersList = [lyr_OIOrthoimageCoverage_0,lyr_T_HIDRANT_1,lyr_NASELJE_2,lyr_ADDRESS_3];
lyr_T_HIDRANT_1.set('fieldAliases', {'DN': 'DN', 'UGRADNJA': 'UGRADNJA', });
lyr_NASELJE_2.set('fieldAliases', {'ID': 'ID', 'NASELJE': 'NASELJE', 'POVRSINA ': 'POVRSINA ', 'br.stanovn': 'br.stanovn', });
lyr_ADDRESS_3.set('fieldAliases', {'ID': 'ID', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'GOV_ID': 'GOV_ID', 'STREET': 'STREET', 'HOUSE_NUM': 'HOUSE_NUM', 'APPENDIX': 'APPENDIX', 'DISTRICT': 'DISTRICT', 'SETTLEMENT': 'SETTLEMENT', });
lyr_T_HIDRANT_1.set('fieldImages', {'DN': 'Range', 'UGRADNJA': 'TextEdit', });
lyr_NASELJE_2.set('fieldImages', {'ID': 'Range', 'NASELJE': 'TextEdit', 'POVRSINA ': 'TextEdit', 'br.stanovn': 'Range', });
lyr_ADDRESS_3.set('fieldImages', {'ID': 'Range', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'GOV_ID': 'TextEdit', 'STREET': 'TextEdit', 'HOUSE_NUM': 'Range', 'APPENDIX': 'TextEdit', 'DISTRICT': 'TextEdit', 'SETTLEMENT': 'TextEdit', });
lyr_T_HIDRANT_1.set('fieldLabels', {'DN': 'inline label - visible with data', 'UGRADNJA': 'header label - always visible', });
lyr_NASELJE_2.set('fieldLabels', {'ID': 'no label', 'NASELJE': 'no label', 'POVRSINA ': 'no label', 'br.stanovn': 'no label', });
lyr_ADDRESS_3.set('fieldLabels', {'ID': 'no label', 'X_COORD': 'no label', 'Y_COORD': 'no label', 'GOV_ID': 'no label', 'STREET': 'inline label - visible with data', 'HOUSE_NUM': 'inline label - visible with data', 'APPENDIX': 'inline label - visible with data', 'DISTRICT': 'inline label - visible with data', 'SETTLEMENT': 'inline label - visible with data', });
lyr_ADDRESS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});