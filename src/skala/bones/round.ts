function round(n: number, precision: number = 2): number {
  return Math.round(n * 10 ** precision) / 10 ** precision;
}

export default round;
