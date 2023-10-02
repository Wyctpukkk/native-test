export const clampString = (str: string, maxLength: number): string => {
  return str.length > maxLength ? `${str.slice(0, maxLength - 3)}...` : str;
};
