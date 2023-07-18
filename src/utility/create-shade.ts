type HSL = {
  h: number;
  s: number;
  l: number;
};

export const createShade = (color: string, percentage: number): string => {
  // Convert color to HSL
  const r = parseInt(color.slice(1, 3), 16) / 255;
  const g = parseInt(color.slice(3, 5), 16) / 255;
  const b = parseInt(color.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0; // Initialize h to a default value
  let s,
    l = (max + min) / 2;

  if (max === min) {
    h = 0; // achromatic
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  // Reduce lightness by the given percentage
  l -= percentage;

  // Ensure lightness is within [0, 1] range
  l = Math.max(0, Math.min(1, l));

  // Convert back to RGB
  const calculateRGB = (c: number, x: number, m: number): number =>
    Math.round((c + m) * 255);
  const rgbColor = (r: number, g: number, b: number) =>
    `#${calculateRGB(r, g, b).toString(16)}${calculateRGB(g, r, b).toString(
      16
    )}${calculateRGB(b, g, r).toString(16)}`;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
  const m = l - c / 2;

  if (h < 1 / 6) {
    return rgbColor(c + m, x + m, m);
  } else if (h < 1 / 3) {
    return rgbColor(x + m, c + m, m);
  } else if (h < 1 / 2) {
    return rgbColor(m, c + m, x + m);
  } else if (h < 2 / 3) {
    return rgbColor(m, x + m, c + m);
  } else if (h < 5 / 6) {
    return rgbColor(x + m, m, c + m);
  } else {
    return rgbColor(c + m, m, x + m);
  }
};
