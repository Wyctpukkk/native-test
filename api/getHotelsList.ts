export const getHotelsList = async (
  location: string,
  checkIn: string,
  checkOut: string
): Promise<any> => {
  try {
    const response = await fetch(
      `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // Обработка ошибок
    alert('Сервер не отвечает на запрос');
    throw error;
  }
};
