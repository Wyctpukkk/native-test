export const getHotelsPhoto = async (hotelId: string): Promise<any> => {
  try {
    const response = await fetch(
      `https://yasen.hotellook.com/photos/hotel_photos?id=${hotelId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    // Обработка ошибок
    alert('Сервер не отвечает на запрос');
    throw error;
  }
};
