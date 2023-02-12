function round(n: number, precision = 2) {
  return Math.round(n * 10 ** precision) / 10 ** precision;
}

export default round;
