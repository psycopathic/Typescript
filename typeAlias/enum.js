var conditions;
(function (conditions) {
    conditions[conditions["rainy"] = 0] = "rainy";
    conditions[conditions["sunny"] = 1] = "sunny";
    conditions[conditions["cloudy"] = 2] = "cloudy";
})(conditions || (conditions = {}));
var weather12 = conditions.rainy;
var weather2 = conditions.sunny;
var weather3 = conditions.cloudy;
console.log(weather12, weather2, weather3);
