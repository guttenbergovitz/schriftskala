import round from './lib/round'
import inspectBaselineMatch from './lib/inspect-baseline-match'

import { BaseFontSize, BaseLineHeight, ReturnType, Unit } from './lib/types'
import { handleTypeScaleInput, TraditionalTypeScaleEnum, TypeScaleInput } from './lib/handle-typescale-input'

class Skala {
  private inspector = false
  private readonly ts: number

  constructor (
    private baseFontSize: BaseFontSize,
    private typeScaleInput: TypeScaleInput = TraditionalTypeScaleEnum.MAJOR_THIRD,
    // TODO: Currently we're accepting only number as lineHeight. We should accept string with unit as well.
    private lineHeight: BaseLineHeight,
    private unit: Unit = 'px',
    private precision: number = 0
  ) {
    this.ts = handleTypeScaleInput(this.typeScaleInput)
  }

  public generate(stepsUp = 7, stepsDown = 3): {
    base: ReturnType,
    up: ReturnType[],
    down: ReturnType[]
  } {
    const base = this.base()
    const up = [...Array(stepsUp + 1).keys()].map(n => this.up(n as number))
    const down = [...Array(stepsDown + 1).keys()].map(n => this.down(n as number))
    return { base, up, down }
  }

  public base() {
    return {
      fs: round(this.baseFontSize, this.precision),
      lh: round(this.lineHeight * this.baseFontSize, this.precision),
      unit: this.unit,
      printFontSize: `${round(this.baseFontSize, this.precision)}${this.unit}`,
      printLineHeight: `${round(this.lineHeight * this.baseFontSize, this.precision)}${this.unit}`,
      inspect: this.inspector ? inspectBaselineMatch(this.lineHeight * this.baseFontSize, this.baseFontSize) : null
    }
  }

  public up (n: number): ReturnType {
    if (n === 0) {
      return this.base()
    }

    const { fs } = this.up(n - 1)

    return {
      fs: round(fs * this.ts, this.precision),
      lh: round(this.lineHeight * fs * this.ts, this.precision),
      unit: this.unit,
      printFontSize: `${round(fs * this.ts, this.precision)}${this.unit}`,
      printLineHeight: `${round(this.lineHeight * fs * this.ts, this.precision)}${this.unit}`,
      inspect: this.inspector ? inspectBaselineMatch(this.lineHeight * fs * this.ts, this.baseFontSize) : null
    }
  }

  public down (n: number): ReturnType {
    if (n === 0) {
      return this.base()
    }

    const { fs } = this.down(n - 1)

    return {
      fs: round(fs / this.ts, this.precision),
      lh: round(this.lineHeight * (fs / this.ts), this.precision),
      unit: this.unit,
      printFontSize: `${round(fs / this.ts, this.precision)}${this.unit}`,
      printLineHeight: `${round(this.lineHeight * (fs / this.ts), this.precision)}${this.unit}`,
      inspect: this.inspector ? inspectBaselineMatch(this.lineHeight * (fs / this.ts), this.baseFontSize) : null
    }
  }

  public toggleInspector() {
    this.inspector = !this.inspector
  }
}

export default Skala
