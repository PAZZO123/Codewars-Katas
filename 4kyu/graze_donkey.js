let getRopeLength = function (fieldDiameter, eatenRatio) {
  if (eatenRatio <= 0) return 0;
  if (eatenRatio >= 1) return fieldDiameter;

  const R = fieldDiameter / 2;
  const totalArea = Math.PI * R * R;

  function eatenArea(L) {
    if (L <= 0) return 0;
    if (L >= 2 * R) return totalArea;

    const d = R;
    const r1 = R;
    const r2 = L;

    const part1 =
      r1 * r1 *
      Math.acos((d * d + r1 * r1 - r2 * r2) / (2 * d * r1));

    const part2 =
      r2 * r2 *
      Math.acos((d * d + r2 * r2 - r1 * r1) / (2 * d * r2));

    const part3 =
      0.5 *
      Math.sqrt(
        (-d + r1 + r2) *
        (d + r1 - r2) *
        (d - r1 + r2) *
        (d + r1 + r2)
      );

    return part1 + part2 - part3;
  }

  let low = 0;
  let high = fieldDiameter;
  let ans = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const ratio = eatenArea(mid) / totalArea;

    if (ratio <= eatenRatio) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};