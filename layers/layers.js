var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Cuencas_2 = new ol.format.GeoJSON();
var features_Cuencas_2 = format_Cuencas_2.readFeatures(json_Cuencas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuencas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_2.addFeatures(features_Cuencas_2);
var lyr_Cuencas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuencas_2, 
                style: style_Cuencas_2,
                interactive: true,
    title: 'Cuencas<br />\
    <img src="styles/legend/Cuencas_2_0.png" /> Rio Lempa<br />\
    <img src="styles/legend/Cuencas_2_1.png" /> Rio Ulua<br />'
        });
var format_Subcuencas_3 = new ol.format.GeoJSON();
var features_Subcuencas_3 = format_Subcuencas_3.readFeatures(json_Subcuencas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subcuencas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subcuencas_3.addFeatures(features_Subcuencas_3);
var lyr_Subcuencas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Subcuencas_3, 
                style: style_Subcuencas_3,
                interactive: true,
                title: '<img src="styles/legend/Subcuencas_3.png" /> Sub-cuencas'
            });
var format_MicrocuencasProtegidasICF_4 = new ol.format.GeoJSON();
var features_MicrocuencasProtegidasICF_4 = format_MicrocuencasProtegidasICF_4.readFeatures(json_MicrocuencasProtegidasICF_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicrocuencasProtegidasICF_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicrocuencasProtegidasICF_4.addFeatures(features_MicrocuencasProtegidasICF_4);
var lyr_MicrocuencasProtegidasICF_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicrocuencasProtegidasICF_4, 
                style: style_MicrocuencasProtegidasICF_4,
                interactive: true,
                title: '<img src="styles/legend/MicrocuencasProtegidasICF_4.png" /> Micro-cuencas Protegidas ICF'
            });
var format_CoberturaVegetal_5 = new ol.format.GeoJSON();
var features_CoberturaVegetal_5 = format_CoberturaVegetal_5.readFeatures(json_CoberturaVegetal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoberturaVegetal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoberturaVegetal_5.addFeatures(features_CoberturaVegetal_5);
var lyr_CoberturaVegetal_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoberturaVegetal_5, 
                style: style_CoberturaVegetal_5,
                interactive: true,
    title: 'Cobertura Vegetal<br />\
    <img src="styles/legend/CoberturaVegetal_5_0.png" /> Bosque  Conifera - Pino<br />\
    <img src="styles/legend/CoberturaVegetal_5_1.png" /> Bosque Latifoliado<br />\
    <img src="styles/legend/CoberturaVegetal_5_2.png" /> Bosque Mixto<br />\
    <img src="styles/legend/CoberturaVegetal_5_3.png" /> Agricultura Tradicional-Matorral<br />\
    <img src="styles/legend/CoberturaVegetal_5_4.png" /> Pastizalas - Sabanas<br />'
        });
var format_Ros_6 = new ol.format.GeoJSON();
var features_Ros_6 = format_Ros_6.readFeatures(json_Ros_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_6.addFeatures(features_Ros_6);
var lyr_Ros_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ros_6, 
                style: style_Ros_6,
                interactive: true,
                title: '<img src="styles/legend/Ros_6.png" /> Ríos'
            });
var format_Deslizamientos_7 = new ol.format.GeoJSON();
var features_Deslizamientos_7 = format_Deslizamientos_7.readFeatures(json_Deslizamientos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deslizamientos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deslizamientos_7.addFeatures(features_Deslizamientos_7);
var lyr_Deslizamientos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Deslizamientos_7, 
                style: style_Deslizamientos_7,
                interactive: true,
                title: '<img src="styles/legend/Deslizamientos_7.png" /> Deslizamientos'
            });
var format_Curvas100mts_8 = new ol.format.GeoJSON();
var features_Curvas100mts_8 = format_Curvas100mts_8.readFeatures(json_Curvas100mts_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas100mts_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas100mts_8.addFeatures(features_Curvas100mts_8);
var lyr_Curvas100mts_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvas100mts_8, 
                style: style_Curvas100mts_8,
                interactive: true,
                title: '<img src="styles/legend/Curvas100mts_8.png" /> Curvas 100mts'
            });
var format_CaseriosCenso2001_9 = new ol.format.GeoJSON();
var features_CaseriosCenso2001_9 = format_CaseriosCenso2001_9.readFeatures(json_CaseriosCenso2001_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaseriosCenso2001_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaseriosCenso2001_9.addFeatures(features_CaseriosCenso2001_9);
var lyr_CaseriosCenso2001_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CaseriosCenso2001_9, 
                style: style_CaseriosCenso2001_9,
                interactive: true,
                title: '<img src="styles/legend/CaseriosCenso2001_9.png" /> Caserios (Censo-2001)'
            });
var format_SanJuan_10 = new ol.format.GeoJSON();
var features_SanJuan_10 = format_SanJuan_10.readFeatures(json_SanJuan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanJuan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanJuan_10.addFeatures(features_SanJuan_10);
var lyr_SanJuan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SanJuan_10, 
                style: style_SanJuan_10,
                interactive: true,
                title: '<img src="styles/legend/SanJuan_10.png" /> San Juan'
            });
var format_ReservaBiolgicaOpalaca_11 = new ol.format.GeoJSON();
var features_ReservaBiolgicaOpalaca_11 = format_ReservaBiolgicaOpalaca_11.readFeatures(json_ReservaBiolgicaOpalaca_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservaBiolgicaOpalaca_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaBiolgicaOpalaca_11.addFeatures(features_ReservaBiolgicaOpalaca_11);
var lyr_ReservaBiolgicaOpalaca_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReservaBiolgicaOpalaca_11, 
                style: style_ReservaBiolgicaOpalaca_11,
                interactive: true,
                title: '<img src="styles/legend/ReservaBiolgicaOpalaca_11.png" /> Reserva Biológica Opalaca'
            });
var format_reasIntervenidas_12 = new ol.format.GeoJSON();
var features_reasIntervenidas_12 = format_reasIntervenidas_12.readFeatures(json_reasIntervenidas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasIntervenidas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasIntervenidas_12.addFeatures(features_reasIntervenidas_12);
var lyr_reasIntervenidas_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasIntervenidas_12, 
                style: style_reasIntervenidas_12,
                interactive: true,
                title: '<img src="styles/legend/reasIntervenidas_12.png" /> Áreas Intervenidas'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Cuencas_2.setVisible(false);lyr_Subcuencas_3.setVisible(false);lyr_MicrocuencasProtegidasICF_4.setVisible(false);lyr_CoberturaVegetal_5.setVisible(false);lyr_Ros_6.setVisible(false);lyr_Deslizamientos_7.setVisible(false);lyr_Curvas100mts_8.setVisible(false);lyr_CaseriosCenso2001_9.setVisible(false);lyr_SanJuan_10.setVisible(true);lyr_ReservaBiolgicaOpalaca_11.setVisible(true);lyr_reasIntervenidas_12.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_GoogleSatelliteHybrid_1,lyr_Cuencas_2,lyr_Subcuencas_3,lyr_MicrocuencasProtegidasICF_4,lyr_CoberturaVegetal_5,lyr_Ros_6,lyr_Deslizamientos_7,lyr_Curvas100mts_8,lyr_CaseriosCenso2001_9,lyr_SanJuan_10,lyr_ReservaBiolgicaOpalaca_11,lyr_reasIntervenidas_12];
lyr_Cuencas_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TIPO': 'TIPO', 'CUENCA': 'CUENCA', 'HECTARES': 'HECTARES', });
lyr_Subcuencas_3.set('fieldAliases', {'CUENCAS': 'CUENCAS', 'SUBCUENCAS': 'SUBCUENCAS', 'NUMERO': 'NUMERO', 'AREAHA': 'AREAHA', });
lyr_MicrocuencasProtegidasICF_4.set('fieldAliases', {'NOM_MICRO_': 'NOM_MICRO_', 'MUNICIPIO_': 'MUNICIPIO_', 'AREA_HAS__': 'AREA_HAS__', 'DEPTO_': 'DEPTO_', 'TENENCIA': 'TENENCIA', 'TIPO': 'TIPO', 'USO': 'USO', 'COLOR_H2O': 'COLOR_H2O', 'TURBIDEZ': 'TURBIDEZ', 'PROF_SUELO': 'PROF_SUELO', 'TEXTURA': 'TEXTURA', 'RIESGO_ERO': 'RIESGO_ERO', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COMUNIDAD_': 'COMUNIDAD_', 'USO_SUELO': 'USO_SUELO', 'INSTIT_PRE': 'INSTIT_PRE', });
lyr_CoberturaVegetal_5.set('fieldAliases', {'CLASE': 'CLASE', 'AREA_M2': 'AREA_M2', 'AREA_HA': 'AREA_HA', 'AREA_KM2': 'AREA_KM2', 'PERIMETRO': 'PERIMETRO', });
lyr_Ros_6.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'SOURCETHM': 'SOURCETHM', 'LENGTH': 'LENGTH', 'TIPO': 'TIPO', });
lyr_Deslizamientos_7.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'UNIT': 'UNIT', 'BED_SURF': 'BED_SURF', 'LITHOLOGY': 'LITHOLOGY', 'ERA': 'ERA', 'SYSTEM': 'SYSTEM', 'ROCKGROUP': 'ROCKGROUP', 'ENVIRON': 'ENVIRON', 'LANDSLIDES': 'LANDSLIDES', });
lyr_Curvas100mts_8.set('fieldAliases', {'ALTITUD': 'ALTITUD', 'SOURCETHM': 'SOURCETHM', });
lyr_CaseriosCenso2001_9.set('fieldAliases', {'CASERIO': 'CASERIO', 'VIV_HOG_1': 'VIV_HOG_1', 'VIV_HOG_2': 'VIV_HOG_2', 'SEX_H': 'SEX_H', 'SEX_M': 'SEX_M', 'ED_0A10': 'ED_0A10', 'ED_11A20': 'ED_11A20', 'ED_21A30': 'ED_21A30', 'ED_31A40': 'ED_31A40', 'ED_41A50': 'ED_41A50', 'ED_51A60': 'ED_51A60', 'ED_61A70': 'ED_61A70', 'ED_71A80': 'ED_71A80', 'ED_81A90': 'ED_81A90', 'ED_91A100': 'ED_91A100', 'THIJO_1': 'THIJO_1', 'THIJO_2': 'THIJO_2', 'QHIJO_1': 'QHIJO_1', 'QHIJO_2': 'QHIJO_2', 'QHIJO_3': 'QHIJO_3', 'QHIJO_4': 'QHIJO_4', 'QHIJO_5': 'QHIJO_5', 'QHIJO_6': 'QHIJO_6', 'QHIJO_7A10': 'QHIJO_7A10', 'QHIJ_11A15': 'QHIJ_11A15', 'COOR_X': 'COOR_X', 'COOR_Y': 'COOR_Y', 'COD_MUNI_7': 'COD_MUNI_7', 'COD_ALDEA_': 'COD_ALDEA_', });
lyr_SanJuan_10.set('fieldAliases', {'GEOCODIGO': 'GEOCODIGO', 'NOMBRE': 'NOMBRE', 'HECTARES': 'HECTARES', 'COD_DEPTO': 'COD_DEPTO', });
lyr_ReservaBiolgicaOpalaca_11.set('fieldAliases', {'NUMEROS': 'NUMEROS', 'NOMBRE': 'NOMBRE', 'CATEGORIA': 'CATEGORIA', 'DECRETO_NO': 'DECRETO_NO', 'Perimeter': 'Perimeter', 'Area': 'Area', });
lyr_reasIntervenidas_12.set('fieldAliases', {'Area Ha': 'Area Ha', 'Area m2': 'Area m2', });
lyr_Cuencas_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TIPO': 'TextEdit', 'CUENCA': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_Subcuencas_3.set('fieldImages', {'CUENCAS': 'TextEdit', 'SUBCUENCAS': 'TextEdit', 'NUMERO': 'TextEdit', 'AREAHA': 'TextEdit', });
lyr_MicrocuencasProtegidasICF_4.set('fieldImages', {'NOM_MICRO_': 'TextEdit', 'MUNICIPIO_': 'TextEdit', 'AREA_HAS__': 'TextEdit', 'DEPTO_': 'TextEdit', 'TENENCIA': 'TextEdit', 'TIPO': 'TextEdit', 'USO': 'TextEdit', 'COLOR_H2O': 'TextEdit', 'TURBIDEZ': 'TextEdit', 'PROF_SUELO': 'TextEdit', 'TEXTURA': 'TextEdit', 'RIESGO_ERO': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COMUNIDAD_': 'TextEdit', 'USO_SUELO': 'TextEdit', 'INSTIT_PRE': 'TextEdit', });
lyr_CoberturaVegetal_5.set('fieldImages', {'CLASE': 'TextEdit', 'AREA_M2': 'TextEdit', 'AREA_HA': 'TextEdit', 'AREA_KM2': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_Ros_6.set('fieldImages', {'ID': 'Range', 'NOMBRE': 'TextEdit', 'SOURCETHM': 'TextEdit', 'LENGTH': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Deslizamientos_7.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'UNIT': 'TextEdit', 'BED_SURF': 'TextEdit', 'LITHOLOGY': 'TextEdit', 'ERA': 'TextEdit', 'SYSTEM': 'TextEdit', 'ROCKGROUP': 'TextEdit', 'ENVIRON': 'TextEdit', 'LANDSLIDES': 'TextEdit', });
lyr_Curvas100mts_8.set('fieldImages', {'ALTITUD': 'TextEdit', 'SOURCETHM': 'TextEdit', });
lyr_CaseriosCenso2001_9.set('fieldImages', {'CASERIO': 'TextEdit', 'VIV_HOG_1': 'TextEdit', 'VIV_HOG_2': 'TextEdit', 'SEX_H': 'TextEdit', 'SEX_M': 'TextEdit', 'ED_0A10': 'TextEdit', 'ED_11A20': 'TextEdit', 'ED_21A30': 'TextEdit', 'ED_31A40': 'TextEdit', 'ED_41A50': 'TextEdit', 'ED_51A60': 'TextEdit', 'ED_61A70': 'TextEdit', 'ED_71A80': 'TextEdit', 'ED_81A90': 'TextEdit', 'ED_91A100': 'TextEdit', 'THIJO_1': 'TextEdit', 'THIJO_2': 'TextEdit', 'QHIJO_1': 'TextEdit', 'QHIJO_2': 'TextEdit', 'QHIJO_3': 'TextEdit', 'QHIJO_4': 'TextEdit', 'QHIJO_5': 'TextEdit', 'QHIJO_6': 'TextEdit', 'QHIJO_7A10': 'TextEdit', 'QHIJ_11A15': 'TextEdit', 'COOR_X': 'TextEdit', 'COOR_Y': 'TextEdit', 'COD_MUNI_7': 'TextEdit', 'COD_ALDEA_': 'TextEdit', });
lyr_SanJuan_10.set('fieldImages', {'GEOCODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HECTARES': 'TextEdit', 'COD_DEPTO': 'TextEdit', });
lyr_ReservaBiolgicaOpalaca_11.set('fieldImages', {'NUMEROS': 'TextEdit', 'NOMBRE': 'TextEdit', 'CATEGORIA': 'TextEdit', 'DECRETO_NO': 'TextEdit', 'Perimeter': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasIntervenidas_12.set('fieldImages', {'Area Ha': '', 'Area m2': '', });
lyr_Cuencas_2.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'TIPO': 'inline label', 'CUENCA': 'inline label', 'HECTARES': 'inline label', });
lyr_Subcuencas_3.set('fieldLabels', {'CUENCAS': 'inline label', 'SUBCUENCAS': 'inline label', 'NUMERO': 'inline label', 'AREAHA': 'inline label', });
lyr_MicrocuencasProtegidasICF_4.set('fieldLabels', {'NOM_MICRO_': 'inline label', 'MUNICIPIO_': 'inline label', 'AREA_HAS__': 'inline label', 'DEPTO_': 'inline label', 'TENENCIA': 'inline label', 'TIPO': 'inline label', 'USO': 'inline label', 'COLOR_H2O': 'inline label', 'TURBIDEZ': 'inline label', 'PROF_SUELO': 'inline label', 'TEXTURA': 'inline label', 'RIESGO_ERO': 'inline label', 'AREA': 'inline label', 'PERIMETER': 'inline label', 'COMUNIDAD_': 'inline label', 'USO_SUELO': 'inline label', 'INSTIT_PRE': 'inline label', });
lyr_CoberturaVegetal_5.set('fieldLabels', {'CLASE': 'header label', 'AREA_M2': 'inline label', 'AREA_HA': 'inline label', 'AREA_KM2': 'inline label', 'PERIMETRO': 'inline label', });
lyr_Ros_6.set('fieldLabels', {'ID': 'inline label', 'NOMBRE': 'inline label', 'SOURCETHM': 'inline label', 'LENGTH': 'inline label', 'TIPO': 'inline label', });
lyr_Deslizamientos_7.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'UNIT': 'inline label', 'BED_SURF': 'inline label', 'LITHOLOGY': 'inline label', 'ERA': 'inline label', 'SYSTEM': 'inline label', 'ROCKGROUP': 'inline label', 'ENVIRON': 'inline label', 'LANDSLIDES': 'inline label', });
lyr_Curvas100mts_8.set('fieldLabels', {'ALTITUD': 'header label', 'SOURCETHM': 'inline label', });
lyr_CaseriosCenso2001_9.set('fieldLabels', {'CASERIO': 'inline label', 'VIV_HOG_1': 'inline label', 'VIV_HOG_2': 'inline label', 'SEX_H': 'inline label', 'SEX_M': 'inline label', 'ED_0A10': 'inline label', 'ED_11A20': 'inline label', 'ED_21A30': 'inline label', 'ED_31A40': 'inline label', 'ED_41A50': 'inline label', 'ED_51A60': 'inline label', 'ED_61A70': 'inline label', 'ED_71A80': 'inline label', 'ED_81A90': 'inline label', 'ED_91A100': 'inline label', 'THIJO_1': 'inline label', 'THIJO_2': 'inline label', 'QHIJO_1': 'inline label', 'QHIJO_2': 'inline label', 'QHIJO_3': 'inline label', 'QHIJO_4': 'inline label', 'QHIJO_5': 'inline label', 'QHIJO_6': 'inline label', 'QHIJO_7A10': 'inline label', 'QHIJ_11A15': 'inline label', 'COOR_X': 'inline label', 'COOR_Y': 'inline label', 'COD_MUNI_7': 'inline label', 'COD_ALDEA_': 'inline label', });
lyr_SanJuan_10.set('fieldLabels', {'GEOCODIGO': 'inline label', 'NOMBRE': 'inline label', 'HECTARES': 'inline label', 'COD_DEPTO': 'inline label', });
lyr_ReservaBiolgicaOpalaca_11.set('fieldLabels', {'NUMEROS': 'inline label', 'NOMBRE': 'inline label', 'CATEGORIA': 'inline label', 'DECRETO_NO': 'inline label', 'Perimeter': 'inline label', 'Area': 'inline label', });
lyr_reasIntervenidas_12.set('fieldLabels', {'Area Ha': 'inline label', 'Area m2': 'inline label', });
lyr_reasIntervenidas_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});