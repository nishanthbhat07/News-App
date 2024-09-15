export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}
export function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}
