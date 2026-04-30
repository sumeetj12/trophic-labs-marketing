/**
 * Tonal API stores weight per cable. For two-handed bilateral movements
 * (bench, squat, deadlift), per-cable × 2 = total user-perceived weight.
 * Per BUILD-BRIEF-MARKETING-SITE.md §"Per-cable weight display bug".
 */
export function displayWeight(
  perCableLb: number,
  movement: { isTwoSided?: boolean; isBilateral?: boolean } = {}
): string {
  if (movement.isTwoSided && movement.isBilateral) {
    const total = Math.round(perCableLb * 2);
    return `${total} lb total · ${perCableLb} per cable`;
  }
  return `${perCableLb} lb`;
}
