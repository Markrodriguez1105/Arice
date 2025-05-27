// utils/Responsive.ts
import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = Math.min(width, 375); // Don't allow large scaling on big devices

const scale = width / guidelineBaseWidth;

export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
