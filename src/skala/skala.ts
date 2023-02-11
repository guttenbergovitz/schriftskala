class Skala {
  constructor(
    private _baseFontSize: BaseFontSize,
    private _baseLineHeight: BaseLineHeight,
    private _unit: Unit,
  ) {}

  public get baseFontSize() {
    return this._baseFontSize;
  }
}

type BaseFontSize = number;
type BaseLineHeight = number;
type Unit = 'px' | 'em' | 'rem';

export default Skala;

