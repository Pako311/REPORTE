var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MALLA_TIJUANA_1 = new ol.format.GeoJSON();
var features_MALLA_TIJUANA_1 = format_MALLA_TIJUANA_1.readFeatures(json_MALLA_TIJUANA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALLA_TIJUANA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALLA_TIJUANA_1.addFeatures(features_MALLA_TIJUANA_1);
var lyr_MALLA_TIJUANA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALLA_TIJUANA_1, 
                style: style_MALLA_TIJUANA_1,
                popuplayertitle: 'MALLA_TIJUANA',
                interactive: true,
                title: '<img src="styles/legend/MALLA_TIJUANA_1.png" /> MALLA_TIJUANA'
            });
var format_ORTOFOTOYDEM_2 = new ol.format.GeoJSON();
var features_ORTOFOTOYDEM_2 = format_ORTOFOTOYDEM_2.readFeatures(json_ORTOFOTOYDEM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ORTOFOTOYDEM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ORTOFOTOYDEM_2.addFeatures(features_ORTOFOTOYDEM_2);
var lyr_ORTOFOTOYDEM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ORTOFOTOYDEM_2, 
                style: style_ORTOFOTOYDEM_2,
                popuplayertitle: 'ORTOFOTO Y DEM',
                interactive: false,
                title: '<img src="styles/legend/ORTOFOTOYDEM_2.png" /> ORTOFOTO Y DEM'
            });
var format_LIDAR_3 = new ol.format.GeoJSON();
var features_LIDAR_3 = format_LIDAR_3.readFeatures(json_LIDAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIDAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIDAR_3.addFeatures(features_LIDAR_3);
var lyr_LIDAR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIDAR_3, 
                style: style_LIDAR_3,
                popuplayertitle: 'LIDAR',
                interactive: false,
                title: '<img src="styles/legend/LIDAR_3.png" /> LIDAR'
            });
var format_VOLADAS_4 = new ol.format.GeoJSON();
var features_VOLADAS_4 = format_VOLADAS_4.readFeatures(json_VOLADAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOLADAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOLADAS_4.addFeatures(features_VOLADAS_4);
var lyr_VOLADAS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOLADAS_4, 
                style: style_VOLADAS_4,
                popuplayertitle: 'VOLADAS',
                interactive: false,
                title: '<img src="styles/legend/VOLADAS_4.png" /> VOLADAS'
            });
var format_ENTREGADAS_5 = new ol.format.GeoJSON();
var features_ENTREGADAS_5 = format_ENTREGADAS_5.readFeatures(json_ENTREGADAS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENTREGADAS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENTREGADAS_5.addFeatures(features_ENTREGADAS_5);
var lyr_ENTREGADAS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ENTREGADAS_5, 
                style: style_ENTREGADAS_5,
                popuplayertitle: 'ENTREGADAS',
                interactive: false,
                title: '<img src="styles/legend/ENTREGADAS_5.png" /> ENTREGADAS'
            });
var group_PROCESADAS = new ol.layer.Group({
                                layers: [lyr_ORTOFOTOYDEM_2,lyr_LIDAR_3,],
                                fold: "open",
                                title: 'PROCESADAS'});

lyr_google_0.setVisible(true);lyr_MALLA_TIJUANA_1.setVisible(true);lyr_ORTOFOTOYDEM_2.setVisible(true);lyr_LIDAR_3.setVisible(true);lyr_VOLADAS_4.setVisible(true);lyr_ENTREGADAS_5.setVisible(true);
var layersList = [lyr_google_0,lyr_MALLA_TIJUANA_1,group_PROCESADAS,lyr_VOLADAS_4,lyr_ENTREGADAS_5];
lyr_MALLA_TIJUANA_1.set('fieldAliases', {'CLAVE1KTIJ': 'CLAVE1KTIJ', 'VUELO': 'VUELO', 'No_Vuelo': 'No_Vuelo', 'DIA': 'DIA', });
lyr_ORTOFOTOYDEM_2.set('fieldAliases', {'CLAVE1K': 'CLAVE1K', 'N_V': 'N_V', 'SECTOR': 'SECTOR', });
lyr_LIDAR_3.set('fieldAliases', {'CLAVE1K': 'CLAVE1K', 'N_V': 'N_V', 'SECTOR': 'SECTOR', });
lyr_VOLADAS_4.set('fieldAliases', {'CLAVE1K': 'CLAVE1K', 'N_V': 'N_V', 'SECTOR': 'SECTOR', });
lyr_ENTREGADAS_5.set('fieldAliases', {'CLAVE1K': 'CLAVE1K', 'N_V': 'N_V', 'SECTOR': 'SECTOR', });
lyr_MALLA_TIJUANA_1.set('fieldImages', {'CLAVE1KTIJ': 'TextEdit', 'VUELO': 'TextEdit', 'No_Vuelo': 'TextEdit', 'DIA': 'TextEdit', });
lyr_ORTOFOTOYDEM_2.set('fieldImages', {'CLAVE1K': 'TextEdit', 'N_V': 'TextEdit', 'SECTOR': 'TextEdit', });
lyr_LIDAR_3.set('fieldImages', {'CLAVE1K': 'TextEdit', 'N_V': 'TextEdit', 'SECTOR': 'TextEdit', });
lyr_VOLADAS_4.set('fieldImages', {'CLAVE1K': 'TextEdit', 'N_V': 'TextEdit', 'SECTOR': 'TextEdit', });
lyr_ENTREGADAS_5.set('fieldImages', {'CLAVE1K': 'TextEdit', 'N_V': 'TextEdit', 'SECTOR': 'TextEdit', });
lyr_MALLA_TIJUANA_1.set('fieldLabels', {'CLAVE1KTIJ': 'inline label - visible with data', 'VUELO': 'header label - always visible', 'No_Vuelo': 'hidden field', 'DIA': 'hidden field', });
lyr_ORTOFOTOYDEM_2.set('fieldLabels', {'CLAVE1K': 'no label', 'N_V': 'no label', 'SECTOR': 'no label', });
lyr_LIDAR_3.set('fieldLabels', {'CLAVE1K': 'no label', 'N_V': 'no label', 'SECTOR': 'no label', });
lyr_VOLADAS_4.set('fieldLabels', {'CLAVE1K': 'no label', 'N_V': 'no label', 'SECTOR': 'no label', });
lyr_ENTREGADAS_5.set('fieldLabels', {'CLAVE1K': 'no label', 'N_V': 'no label', 'SECTOR': 'no label', });
lyr_ENTREGADAS_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});