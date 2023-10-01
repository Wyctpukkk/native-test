import { View, Text, Image } from 'react-native';
import { useFontLoader } from '../hooks/useFontLoader.ts';
import favorIcon from '../assets/favor.png';
import previewHotel from '../assets/previewhotel.png';
import { type HotelInfo } from '../interfaces/apiInterface.ts';
import StarRating from './StarRating.tsx';

interface HotelsCartProps {
  hotel: HotelInfo;
}

export const HotelsCart = ({ hotel }: HotelsCartProps) => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className='bg-white rounded-[16px] p-[16px] my-[8px]'>
      <View className='flex flex-row justify-between'>
        <View className='w-[57px] h-[57px] rounded-full flex items-center justify-center bg-[#41522e0d]'>
          <Image className='h-[28.5px] w-[28.5px]' source={previewHotel} />
        </View>

        <View className='flex flex-col justify-between h-[57px]'>
          <View className='flex flex-row justify-end items-center'>
            <Text className='text-[17px] font-["Gotham-medium"] font-[500] tracking-[-1.3px]'>
              {hotel.hotelName}
            </Text>
            <Image className='h-[18px] w-[21px] ml-[10px]' source={favorIcon} />
          </View>
          <View className='flex flex-row items-center justify-end'>
            <StarRating rating={hotel.stars} />
            <Text className='text-[#878787] text-[13px] font-["Gotham-normal"] tracking-[-1px]'>
              Осталось 3 комнаты
            </Text>
          </View>
        </View>
      </View>
      <View className='w-full h-[2px] bg-[#F4F4F4] my-[8px]' />
      <View className='flex flex-row items-center justify-end'>
        <Text className='text-[#878787] text-[13px] font-["Gotham-normal"] tracking-[-1px]'>
          Цена за 1 ночь:
        </Text>
        <Text className='ml-[10px] text-[17px] font-["Gotham-medium"] font-[500] tracking-[-1px]'>
          {hotel.priceFrom} ₽
        </Text>
      </View>
    </View>
  );
};