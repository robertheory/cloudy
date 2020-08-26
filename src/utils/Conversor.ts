export function kelvinToCelcius<Number>(kelvin: number, fixed = 1) {
  const result = (kelvin - 273.15).toFixed(fixed);

  return result;
}
export function normalizeDate<Number>(unixtimestamp: number) {
  const date = new Date(unixtimestamp * 1000).toLocaleDateString();

  return date;
}
