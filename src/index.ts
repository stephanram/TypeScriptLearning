//Using Facade pattern

class MyChart {}

class ChartOption {
  private _renderTo: string;
  private _type: string;

  constructor(renderTo: string, type: string) {
    this._renderTo = renderTo;
    this._type = type;
  }
}

class TitleOption {
  private _text: string;

  constructor(text: string) {
    this._text = text;
  }
}

class XAxisOptions {
  private _categories: Array<string>;

  constructor(categories: Array<string>) {
    this._categories = categories;
  }
}

class YAXisOptions {
  public _title: YAXisTitleOptions;

  constructor(YAXisTitleOptions: YAXisTitleOptions) {
    this._title = YAXisTitleOptions;
  }
}

class YAXisTitleOptions {
  private _text: string;
  constructor(text: string) {
    this._text = text;
  }
}

class SeriesOptions {
  private _data: Array<object>;

  constructor(data: Array<object>) {
    this._data = data;
  }
}

