import { ColorValueHex } from "./types";

export const hexToRGB = (
  color: ColorValueHex
): { r: number; g: number; b: number } => {
  const values: { r: number; g: number; b: number } = {
    r: parseInt(color.slice(1, 3), 16),
    g: parseInt(color.slice(3, 5), 16),
    b: parseInt(color.slice(5, 7), 16),
  };
  return values;
};

export const rgbToHex = (rgb: {
  r: number;
  g: number;
  b: number;
}): ColorValueHex => {
  const { r, g, b } = rgb;
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

export const adjustBrightness = (
  color: ColorValueHex,
  change: number
): ColorValueHex => {
  let { r, g, b } = hexToRGB(color);

  r = Math.min(Math.max(r + change, 0), 255);
  g = Math.min(Math.max(g + change, 0), 255);
  b = Math.min(Math.max(b + change, 0), 255);
  
  return rgbToHex({ r, g, b });
};
