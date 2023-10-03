import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useFontLoader } from '../hooks/useFontLoader.ts';
import previewHotel from '../assets/previewhotel.png';
import { type HotelInfo } from '../interfaces/apiInterface.ts';
import { StarRating } from './UI/StarRating.tsx';
import { clampString } from '../helpers/clampString.ts';

import favorIcon from '../assets/favor.png';
import favorIconRed from '../assets/favor-red.png';
import { type initialProps } from '../redux/reducers.ts';

interface HotelsCartProps {
  hotel: HotelInfo;
}

export const HotelsCart = ({ hotel }: HotelsCartProps) => {
  const store = useSelector((state: initialProps) => state);
  const dispatch = useDispatch();
  const [isFavor, setIsFavor] = useState(false);

  useEffect(() => {
    if (store.favor.find((obj) => obj.hotelId === hotel.hotelId)) {
      setIsFavor(true);
    }
  }, [store]);

  const checkIsFavor = () => {
    if (!isFavor) {
      dispatch({ type: 'ADD_FAVOR', payload: hotel });
    } else {
      dispatch({ type: 'DEL_FAVOR', payload: hotel });
    }

    setIsFavor(!isFavor);
  };

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
              {clampString(hotel.hotelName, 29)}
            </Text>
            <TouchableOpacity
              onPress={() => {
                checkIsFavor();
              }}
            >
              {isFavor ? (
                <Image
                  className='h-[18px] w-[21px] ml-[10px]'
                  source={favorIconRed}
                />
              ) : (
                <Image
                  className='h-[18px] w-[21px] ml-[10px]'
                  source={favorIcon}
                />
              )}
            </TouchableOpacity>
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
