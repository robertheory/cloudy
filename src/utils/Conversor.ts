export function kelvinToCelcius<Number>(kelvin: number, fixed = 1) {
  const result = (kelvin - 273.15).toFixed(fixed);

  return result;
}
