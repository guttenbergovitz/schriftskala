import round from './lib/round'
import inspectBaselineMatch from './lib/inspect-baseline-match'

import { BaseFontSize, BaseLineHeight, ReturnType, Unit } from './lib/types'

class Skala {
  constructor (
    private _baseFontSize: BaseFontSize,
    private _typescale: number = 1.25,
    private _lineHeightMultiplier: BaseLineHeight = 1.33,
    private _unit: Unit = 'px',
    private _precision: number = 0
  ) {}

  public base() {
    return {
      fs: round(this._baseFontSize, this._precision),
      lh: round(this._lineHeightMultiplier * this._baseFontSize, this._precision),
      unit: this._unit,
      printFontSize: `${round(this._baseFontSize, this._precision)}${this._unit}`,
      printLineHeight: `${round(this._lineHeightMultiplier * this._baseFontSize, this._precision)}${this._unit}`
    }
  }

  public up (n: number): ReturnType {
    if (n === 0) {
      return {
        fs: round(this._baseFontSize, this._precision),
        lh: round(this._lineHeightMultiplier * this._baseFontSize, this._precision),
        unit: this._unit,
        printFontSize: `${round(this._baseFontSize, this._precision)}${this._unit}`,
        printLineHeight: `${round(this._lineHeightMultiplier * this._baseFontSize, this._precision)}${this._unit}`,
        inspect: inspectBaselineMatch(this._lineHeightMultiplier * this._baseFontSize, this._baseFontSize)
      }
    }

    const { fs } = this.up(n - 1)

    return {
      fs: round(fs * this._typescale, this._precision),
      lh: round(this._lineHeightMultiplier * fs * this._typescale, this._precision),
      unit: this._unit,
      printFontSize: `${round(fs * this._typescale, this._precision)}${this._unit}`,
      printLineHeight: `${round(this._lineHeightMultiplier * fs * this._typescale, this._precision)}${this._unit}`,
      inspect: inspectBaselineMatch(this._lineHeightMultiplier * fs * this._typescale, this._baseFontSize)
    }
  }

  public down (n: number): ReturnType {
    if (n === 0) {
      return {
        fs: round(this._baseFontSize, this._precision),
        lh: round(this._lineHeightMultiplier * this._baseFontSize, this._precision),
        unit: this._unit,
        printFontSize: `${round(this._baseFontSize, this._precision)}${this._unit}`,
        printLineHeight: `${round(this._lineHeightMultiplier * this._baseFontSize * this._typescale, this._precision)}${this._unit}`,
        inspect: inspectBaselineMatch(this._lineHeightMultiplier * this._baseFontSize, this._baseFontSize)
      }
    }

    const { fs } = this.down(n - 1)

    return {
      fs: round(fs / this._typescale, this._precision),
      lh: round(this._lineHeightMultiplier * (fs / this._typescale), this._precision),
      unit: this._unit,
      printFontSize: `${round(fs / this._typescale, this._precision)}${this._unit}`,
      printLineHeight: `${round(this._lineHeightMultiplier * (fs / this._typescale), this._precision)}${this._unit}`,
      inspect: inspectBaselineMatch(this._lineHeightMultiplier * (fs / this._typescale), this._baseFontSize)
    }
  }
}

export default Skala
