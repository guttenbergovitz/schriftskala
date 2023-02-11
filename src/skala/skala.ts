class Skala {
  constructor(
    private _baseFontSize: BaseFontSize,
    private _multiplier: number = 1.25,
    private _baseLineHeight: BaseLineHeight = 1.33,
    private _unit: Unit =  'px',
  ) {}

  public get baseFontSize() {
    return this._baseFontSize;
  }

  public up(n: number): {
    fontSize: number;
    lineHeight:  number;
  } {
    if (n === 0) {
      return {
        fontSize: this._baseFontSize,
        lineHeight: this._baseLineHeight,
      };
    }

    const { fontSize, lineHeight } = this.up(n - 1);

    return {
      fontSize: fontSize * this._multiplier,
      lineHeight: lineHeight * this._multiplier,
    };
  }
}

type BaseFontSize = number;
type BaseLineHeight = number;
type Unit = 'px' | 'em' | 'rem';

export default Skala;

function roundToTwoDecimalPlaces(number: number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}

