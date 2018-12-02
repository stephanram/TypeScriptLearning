"use strict";
var MyChart = /** @class */ (function () {
    function MyChart(highChartOption) {
        //this._container = container;
        this._highChartOption = highChartOption;
    }
    Object.defineProperty(MyChart.prototype, "myChart", {
        get: function () {
            return this._myChart;
        },
        enumerable: true,
        configurable: true
    });
    MyChart.prototype.BuildChart = function () {
        this._myChart = Highcharts.chart(this._highChartOption);
    };
    return MyChart;
}());
var ChartConfigOption = /** @class */ (function () {
    function ChartConfigOption(chart, title, xAxis, yAxis, series) {
        this._chart = chart;
        this._title = title;
        this._xAxis = xAxis;
        this._yAxis = yAxis;
        this._series = series;
    }
    ChartConfigOption.prototype.GetChartOptions = function () {
        var options = {
            chart: {
                renderTo: this._chart.renderTo,
                type: this._chart.type
            },
            title: {
                text: this._title.text
            },
            xAxis: {
                categories: this._xAxis.categories
            },
            yAxis: {
                title: {
                    text: this._yAxis._title.text
                }
            },
            series: this._series.data
        };
        return options;
    };
    return ChartConfigOption;
}());
var ChartOptions = /** @class */ (function () {
    function ChartOptions(renderTo, type) {
        this._renderTo = renderTo;
        this._type = type;
    }
    Object.defineProperty(ChartOptions.prototype, "renderTo", {
        get: function () {
            return this._renderTo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartOptions.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    return ChartOptions;
}());
var TitleOptions = /** @class */ (function () {
    function TitleOptions(text) {
        this._text = text;
    }
    Object.defineProperty(TitleOptions.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    return TitleOptions;
}());
var XAxisOptions = /** @class */ (function () {
    function XAxisOptions(categories) {
        this._categories = categories;
    }
    Object.defineProperty(XAxisOptions.prototype, "categories", {
        get: function () {
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    return XAxisOptions;
}());
var YAXisOptions = /** @class */ (function () {
    function YAXisOptions(YAXisTitleOptions) {
        this._title = YAXisTitleOptions;
    }
    Object.defineProperty(YAXisOptions.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    return YAXisOptions;
}());
var YAXisTitleOptions = /** @class */ (function () {
    function YAXisTitleOptions(text) {
        this._text = text;
    }
    Object.defineProperty(YAXisTitleOptions.prototype, "text", {
        get: function () {
            return this._text;
        },
        enumerable: true,
        configurable: true
    });
    return YAXisTitleOptions;
}());
var SeriesOptions = /** @class */ (function () {
    function SeriesOptions(data) {
        this._data = data;
    }
    Object.defineProperty(SeriesOptions.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    return SeriesOptions;
}());
var BuildSampleBarChart = /** @class */ (function () {
    function BuildSampleBarChart() {
    }
    BuildSampleBarChart.prototype.Build = function () {
        var renderTo = "container";
        var chartType = "bar";
        var chartOptions = new ChartOptions(renderTo, chartType);
        var chartTitleText = "Fruit Consumption";
        var titleOptions = new TitleOptions(chartTitleText);
        var xAxisCategories = ["Apples", "Bananas", "Oranges"];
        var xAxisOptions = new XAxisOptions(xAxisCategories);
        var yaxisTitleText = "Fruit eaten";
        var yAxisTitleOptions = new YAXisTitleOptions(yaxisTitleText);
        var yAxisOptions = new YAXisOptions(yAxisTitleOptions);
        var seriesData = [
            {
                name: "Jane",
                data: [1, 0, 4]
            },
            {
                name: "John",
                data: [5, 7, 3]
            }
        ];
        var seriesOptions = new SeriesOptions(seriesData);
        var chartConfigOptions = new ChartConfigOption(chartOptions, titleOptions, xAxisOptions, yAxisOptions, seriesOptions);
        var highchartOption = chartConfigOptions.GetChartOptions();
        var myBarChart = new MyChart(highchartOption);
        myBarChart.BuildChart();
    };
    return BuildSampleBarChart;
}());
$(document).ready(function () {
    var buildSampleChart = new BuildSampleBarChart();
    buildSampleChart.Build();
});
//# sourceMappingURL=index.js.map