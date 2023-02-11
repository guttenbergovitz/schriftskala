class Skala {
  constructor(
    private _baseFontSize: BaseFontSize,
    private _typescale: number = 1.25,
    private _lineHeightMultiplier: BaseLineHeight = 1.33,
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
        lineHeight: this._lineHeightMultiplier,
      };
    }

    const { fontSize, lineHeight } = this.up(n - 1);

    return {
      fontSize: fontSize * this._typescale,
      lineHeight: lineHeight * this._typescale,
    };
  }

  public down(n: number): {
    fontSize: number;
    lineHeight:  number;
  } {
    if (n === 0) {
      return {
        fontSize: this._baseFontSize,
        lineHeight: this._lineHeightMultiplier,
      };
    }

    const { fontSize, lineHeight } = this.down(n - 1);

    return {
      fontSize: fontSize / this._typescale,
      lineHeight: lineHeight / this._typescale,
    }
  }
}

type BaseFontSize = number;
type BaseLineHeight = number;
type Unit = 'px' | 'em' | 'rem';

export default Skala;
