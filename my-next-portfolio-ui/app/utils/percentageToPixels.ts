export const percentageToPixels = (percentage: number, containerSize: number): number => {
  return (percentage / 100) * containerSize;
};