import round from './lib/round'
import inspectBaselineMatch from './lib/inspect-baseline-match'

import { BaseFontSize, BaseLineHeight, ReturnType, Unit } from './lib/types'

class Skala {
  private _inspector = false

  constructor (
    private _baseFontSize: BaseFontSize,
    private _typescale: number = 1.25,
    private _lineHeightMultiplier: BaseLineHeight = 1.33,
    private _unit: Unit = 'px',
    private _precision: number = 0
  ) {}

  public generate(stepsUp = 7, stepsDown = 3): {
    base: ReturnType,
    up: ReturnType[],
    down: ReturnType[]
  } {
    const base = this.base()
    const up = [...Array(stepsUp + 1).keys()].map(n => this.up(n))
    const down = [...Array(stepsDown + 1).keys()].map(n => this.down(n))
    return { base, up, down }
  }

  public base() {
    return {
      fs: round(this._baseFontSize, this._precision),
      lh: round(this._lineHeightMultiplier * this._baseFontSize, this._precision),
      unit: this._unit,
      printFontSize: `${round(this._baseFontSize, this._precision)}${this._unit}`,
      printLineHeight: `${round(this._lineHeightMultiplier * this._baseFontSize, this._precision)}${this._unit}`,
      inspect: this._inspector ? inspectBaselineMatch(this._lineHeightMultiplier * this._baseFontSize, this._baseFontSize) : null
    }
  }

  public up (n: number): ReturnType {
    if (n === 0) {
      return this.base()
    }

    const { fs } = this.up(n - 1)

    return {
      fs: round(fs * this._typescale, this._precision),
      lh: round(this._lineHeightMultiplier * fs * this._typescale, this._precision),
      unit: this._unit,
      printFontSize: `${round(fs * this._typescale, this._precision)}${this._unit}`,
      printLineHeight: `${round(this._lineHeightMultiplier * fs * this._typescale, this._precision)}${this._unit}`,
      inspect: this._inspector ? inspectBaselineMatch(this._lineHeightMultiplier * fs * this._typescale, this._baseFontSize) : null
    }
  }

  public down (n: number): ReturnType {
    if (n === 0) {
      return this.base()
    }

    const { fs } = this.down(n - 1)

    return {
      fs: round(fs / this._typescale, this._precision),
      lh: round(this._lineHeightMultiplier * (fs / this._typescale), this._precision),
      unit: this._unit,
      printFontSize: `${round(fs / this._typescale, this._precision)}${this._unit}`,
      printLineHeight: `${round(this._lineHeightMultiplier * (fs / this._typescale), this._precision)}${this._unit}`,
      inspect: this._inspector ? inspectBaselineMatch(this._lineHeightMultiplier * (fs / this._typescale), this._baseFontSize) : null
    }
  }

  public toggleInspector() {
    this._inspector = !this._inspector
  }
}

export default Skala
