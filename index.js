var _ = require('lodash');
var fs = require('fs');

console.log(__dirname);
fs.readFile(__dirname + "/hongdae_all.json", "utf8", load_complete_handler);

var final_data = {
  type: "FeatureCollection",
  features: []
};

function load_complete_handler(err, data){
  // debugger;
  var original = JSON.parse(data);
  
  var features = _.filter(original.features, function(feature) {
    return !_.isUndefined(feature.properties.building);
  });

  final_data.features = features;

  fs.writeFile(__dirname + "/hongdae_building.json", JSON.stringify(final_data));
  // console.log(building_features);
  // console.log(original.features.length)
  console.log("done");

}