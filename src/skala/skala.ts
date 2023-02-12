import round from './bones/round'

import { BaseFontSize, BaseLineHeight, ReturnType, Unit } from './bones/types';

class Skala {
  constructor(
    private _baseFontSize: BaseFontSize,
    private _typescale: number = 1.25,
    private _lineHeightMultiplier: BaseLineHeight = 1.33,
    private _unit: Unit =  'px',
    private _precision: number = 0,
  ) {}

  public get baseFontSize() {
    return this._baseFontSize;
  }

  public up(n: number): ReturnType {
    if (n === 0) {
      return {
        fs: round(this._baseFontSize, this._precision),
        lh: round(this._lineHeightMultiplier * this._baseFontSize, this._precision),
        unit: this._unit,
        printFontSize: `${round(this._baseFontSize, this._precision)}${this._unit}`,
        printLineHeight: `${round(this._lineHeightMultiplier * this._baseFontSize, this._precision)}${this._unit}`,
      };
    }

    const { fs } = this.up(n - 1);

    return {
      fs: round(fs * this._typescale, this._precision),
      lh: round(this._lineHeightMultiplier * fs * this._typescale, this._precision),
      unit: this._unit,
      printFontSize: `${round(fs * this._typescale, this._precision)}${this._unit}`,
      printLineHeight: `${round(this._lineHeightMultiplier * fs * this._typescale, this._precision)}${this._unit}`,
    };
  }

  public down(n: number): ReturnType {
    if (n === 0) {
      return {
        fs: round(this._baseFontSize, this._precision),
        lh: round(this._lineHeightMultiplier * this._baseFontSize, this._precision),
        unit: this._unit,
        printFontSize: `${round(this._baseFontSize, this._precision)}${this._unit}`,
        printLineHeight: `${round(this._lineHeightMultiplier * this._baseFontSize * this._typescale, this._precision)}${this._unit}`,
      };
    }

    const { fs } = this.down(n - 1);

    return {
      fs: round(fs / this._typescale, this._precision),
      lh: round(this._lineHeightMultiplier * (fs / this._typescale), this._precision),
      unit: this._unit,
      printFontSize: `${round(fs / this._typescale, this._precision)}${this._unit}`,
      printLineHeight: `${round(this._lineHeightMultiplier * (fs / this._typescale), this._precision)}${this._unit}`,
    }
  }
}


export default Skala;
