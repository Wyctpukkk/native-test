export const finallyRequestInString = (
  location: string,
  checkIn: string,
  daysCount: number
) => {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const checkInDate = new Date(checkIn);
  const checkInDay = checkInDate.getDate();
  const checkInMonth = months[checkInDate.getMonth()];
  const checkInYear = checkInDate.getFullYear();

  const nightsWordForms = ['ночь', 'ночи', 'ночей'];
  const nightsCount = daysCount;

  const nightsWord = (() => {
    if (nightsCount % 10 === 1 && nightsCount % 100 !== 11) {
      return nightsWordForms[0];
    }
    if (
      nightsCount % 10 >= 2 &&
      nightsCount % 10 <= 4 &&
      (nightsCount % 100 < 10 || nightsCount % 100 >= 20)
    ) {
      return nightsWordForms[1];
    }
    return nightsWordForms[2];
  })();

  return `${location}, ${checkInDay} ${checkInMonth} ${checkInYear}, ${daysCount} ${nightsWord}`;
};
