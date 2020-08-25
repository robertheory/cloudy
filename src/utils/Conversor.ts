export function kelvinToCelcius<Number>(kelvin: number, fixed = 1) {
  const result = (kelvin - 273.15).toFixed(fixed);

  return result;
}
export function normalizeDate<Number>(date: number) {
  const result = new Date(date).toTimeString().split('GMT')[0];

  return result;
}
