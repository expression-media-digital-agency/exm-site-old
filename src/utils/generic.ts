/**
 * Combine a number of classes removing undefined values
 * @param {string} styles A list of classes to compose together
 */
export const composeClasses = (...styles: (string | boolean | undefined)[]): string => styles
  .filter(item => item)
  .join(' ');
