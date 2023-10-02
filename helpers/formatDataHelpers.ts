export const formatDateDot = (date: Date): string => {
  const day: string = date.getDate().toString().padStart(2, '0');
  const month: string = (date.getMonth() + 1).toString().padStart(2, '0');
  const year: number = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(date.getDate() + days);
  return result;
};

export const formatDateDash = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const dayCount = (count: number, checkIn: string): string => {
  const parsedCheckIn = new Date(checkIn);
  const newDate = addDays(parsedCheckIn, count);
  return formatDateDash(newDate);
};
