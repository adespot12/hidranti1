var size = 0;
var placement = 'point';

var style_NASELJE_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("''");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#f9de32";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("NASELJE") !== null) {
        labelText = String(feature.get("NASELJE"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
