import { InspectBaselineMatch } from './inspect-baseline-match'

type BaseFontSize = number;
type BaseLineHeight = number;
type Unit = 'px' | 'em' | 'rem';
type ReturnType = {
  fs: number;
  lh: number;
  unit: Unit;
  printFontSize: string;
  printLineHeight: string;
  inspect?: InspectBaselineMatch | null;
}


export { BaseFontSize, BaseLineHeight, Unit, ReturnType}
