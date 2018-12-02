//Using Facade pattern
declare var Highcharts: any;

class MyChart {
  private _myChart: any;
  //private _container: string;
  private _highChartOption: object;

  public get myChart(): string {
    return this._myChart;
  }

  constructor(highChartOption: object) {
    //this._container = container;
    this._highChartOption = highChartOption;
  }

  public BuildChart(): void {
    this._myChart = Highcharts.chart(this._highChartOption);
  }
}

class ChartConfigOption {
  private _chart: ChartOptions;
  private _title: TitleOptions;
  private _xAxis: XAxisOptions;
  private _yAxis: YAXisOptions;
  private _series: SeriesOptions;

  constructor(
    chart: ChartOptions,
    title: TitleOptions,
    xAxis: XAxisOptions,
    yAxis: YAXisOptions,
    series: SeriesOptions
  ) {
    this._chart = chart;
    this._title = title;
    this._xAxis = xAxis;
    this._yAxis = yAxis;
    this._series = series;
  }

  public GetChartOptions(): object {

    let options = {
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
  }
}

class ChartOptions {
  private _renderTo: string;
  private _type: string;

  public get renderTo(): string {
    return this._renderTo;
  }

  public get type(): string {
    return this._type;
  }

  constructor(renderTo: string, type: string) {
    this._renderTo = renderTo;
    this._type = type;
  }
}

class TitleOptions {
  private _text: string;

  public get text(): string {
    return this._text;
  }

  constructor(text: string) {
    this._text = text;
  }
}

class XAxisOptions {
  private _categories: Array<string>;

  public get categories(): Array<string> {
    return this._categories;
  }

  constructor(categories: Array<string>) {
    this._categories = categories;
  }
}

class YAXisOptions {
  public _title: YAXisTitleOptions;

  public get title(): YAXisTitleOptions {
    return this._title;
  }

  constructor(YAXisTitleOptions: YAXisTitleOptions) {
    this._title = YAXisTitleOptions;
  }
}

class YAXisTitleOptions {
  private _text: string;

  public get text(): string {
    return this._text;
  }

  constructor(text: string) {
    this._text = text;
  }
}

class SeriesOptions {
  private _data: Array<object>;

  constructor(data: Array<object>) {
    this._data = data;
  }

  public get data(): Array<object> {
    return this._data;
  }
}

class BuildSampleBarChart {
  constructor() {}

  public Build(): void {
    let renderTo: string = "container";
    let chartType: string = "bar";
    let chartOptions = new ChartOptions(renderTo, chartType);

    let chartTitleText: string = "Fruit Consumption";
    let titleOptions = new TitleOptions(chartTitleText);

    let xAxisCategories: Array<string> = ["Apples", "Bananas", "Oranges"];
    let xAxisOptions = new XAxisOptions(xAxisCategories);

    let yaxisTitleText: string = "Fruit eaten";
    let yAxisTitleOptions = new YAXisTitleOptions(yaxisTitleText);
    let yAxisOptions = new YAXisOptions(yAxisTitleOptions);

    let seriesData: Array<object> = [
      {
        name: "Jane",
        data: [1, 0, 4]
      },
      {
        name: "John",
        data: [5, 7, 3]
      }
    ];
    let seriesOptions = new SeriesOptions(seriesData);

    let chartConfigOptions = new ChartConfigOption(
      chartOptions,
      titleOptions,
      xAxisOptions,
      yAxisOptions,
      seriesOptions
    );
    let highchartOption = chartConfigOptions.GetChartOptions();

    let myBarChart = new MyChart(highchartOption);
    myBarChart.BuildChart();
  }
}

$(document).ready(function() {
  let buildSampleChart = new BuildSampleBarChart();
  buildSampleChart.Build();
});
