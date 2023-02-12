export type InspectBaselineMatch = {
  original: number;
  rounded: number;
  multiplier: number;
  difference: number;
}

/**
 * Inspects a given height and baseline to determine if the height is a multiple of the baseline.
 * @param h The height to inspect.
 * @param bl The baseline to match against.
 * @returns An object containing the original height, the rounded height, the multiplier in rounded, and the difference.
 */
function inspectBaselineMatch(h: number, bl: number): InspectBaselineMatch {
  if (h % bl === 0) {
    return {
      original: h,
      rounded: h,
      multiplier: 1,
      difference: 0,
    }
  }
  if (h < bl) {
    return {
      original: h,
      rounded: bl,
      multiplier: 1,
      difference: bl - h,
    }
  }
  const rounded = Math.round(h / bl) * bl;

  return {
    original: h,
    rounded,
    multiplier: rounded / bl,
    difference: rounded - h,
  }
}

export default inspectBaselineMatch
