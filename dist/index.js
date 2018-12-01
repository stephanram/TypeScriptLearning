"use strict";
//Using Facade pattern
var MyChart = /** @class */ (function () {
    function MyChart() {
    }
    return MyChart;
}());
var ChartOption = /** @class */ (function () {
    function ChartOption(renderTo, type) {
        this._renderTo = renderTo;
        this._type = type;
    }
    return ChartOption;
}());
var TitleOption = /** @class */ (function () {
    function TitleOption(text) {
        this._text = text;
    }
    return TitleOption;
}());
var XAxisOptions = /** @class */ (function () {
    function XAxisOptions(categories) {
        this._categories = categories;
    }
    return XAxisOptions;
}());
var YAXisOptions = /** @class */ (function () {
    function YAXisOptions(YAXisTitleOptions) {
        this._title = YAXisTitleOptions;
    }
    return YAXisOptions;
}());
var YAXisTitleOptions = /** @class */ (function () {
    function YAXisTitleOptions(text) {
        this._text = text;
    }
    return YAXisTitleOptions;
}());
var SeriesOptions = /** @class */ (function () {
    function SeriesOptions(data) {
        this._data = data;
    }
    return SeriesOptions;
}());
//# sourceMappingURL=index.js.map