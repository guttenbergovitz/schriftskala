type BaseFontSize = number;
type BaseLineHeight = number;
type Unit = 'px' | 'em' | 'rem';
type ReturnType = {
  fs: number;
  lh: number;
  unit: Unit;
  printFontSize: string;
  printLineHeight: string;
}

export { BaseFontSize, BaseLineHeight, Unit, ReturnType}
