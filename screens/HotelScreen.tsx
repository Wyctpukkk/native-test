import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StarRating } from '../components/UI/StarRating.tsx';
import { useFontLoader } from '../hooks/useFontLoader.ts';

import bed from '../assets/bed.png';
import user from '../assets/user.png';
import hotelOutside from '../assets/hotel-outside.png';
import back from '../assets/back.png';
import favorIcon from '../assets/favor.png';
import favorIconRed from '../assets/favor-red.png';
import scroll1 from '../assets/scroll1.png';
import scroll2 from '../assets/scroll2.png';

import { SliderItem } from '../components/SliderItem.tsx';
import { type HotelInfo } from '../interfaces/apiInterface.ts';
import { type initialProps } from '../redux/reducers.ts';

const sliderData = [
  { id: 1, image: scroll1 },
  { id: 2, image: scroll2 },
  { id: 3, image: scroll1 },
  { id: 4, image: scroll2 },
];

export const HotelScreen = () => {
  const route = useRoute();
  const receivedProp: HotelInfo = route.params?.hotelProps;
  const navigation = useNavigation();

  const getBackToList = () => {
    navigation.navigate('MainScreen');
  };

  const store = useSelector((state: initialProps) => state);
  const dispatch = useDispatch();
  const [isFavor, setIsFavor] = useState(false);

  useEffect(() => {
    if (store.favor.find((obj) => obj.hotelId === receivedProp.hotelId)) {
      setIsFavor(true);
    }
  }, [store]);

  const checkIsFavor = () => {
    if (!isFavor) {
      dispatch({ type: 'ADD_FAVOR', payload: receivedProp });
    } else {
      dispatch({ type: 'DEL_FAVOR', payload: receivedProp });
    }

    setIsFavor(!isFavor);
  };

  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <StatusBar />
      <View>
        <View className='w-full h-[237px] rounded-[16px] bg-white overflow-hidden relative flex justify-end'>
          <Image
            className='absolute top-0 left-0 h-full w-full object-cover z-[-1]'
            source={hotelOutside}
          />
          <View className='flex flex-col justify-between h-full'>
            <View className='w-full p-[16px] mt-[35px] flex flex-row justify-between'>
              <TouchableOpacity
                onPress={() => {
                  getBackToList();
                }}
              >
                <Image className='h-[24px] w-[24px]' source={back} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  checkIsFavor();
                }}
              >
                {isFavor ? (
                  <Image className='h-[22px] w-[26px] ' source={favorIconRed} />
                ) : (
                  <Image className='h-[22px] w-[26px] ' source={favorIcon} />
                )}
              </TouchableOpacity>
            </View>
            <View className='p-[16px]'>
              <Text className='text-[#fff] text-[24px] font-["Gotham-medium"] tracking-[-1px] mb-[12px]'>
                {receivedProp.hotelName}
              </Text>
              <StarRating white rating={receivedProp.stars} />
            </View>
          </View>
        </View>

        <View className='p-[16px]'>
          <View className='flex flex-row mb-[35px] mt-[25px]'>
            <View>
              <Image className='h-[76px] w-[76px] mr-[9px]' source={bed} />
            </View>
            <View>
              <Text className='text-[#000] text-[14px] font-["Gotham-medium"] mb-[8px] max-w-[300px]'>
                Улучшенный номер с кроватью размера “queen - size”
              </Text>
              <View className='flex flex-row items-center'>
                <Image className='h-[24px] w-[24px] mr-[9px]' source={user} />
                <Text>2</Text>
              </View>
            </View>
          </View>

          <View className='mb-[24px]'>
            <Text className='text-[#000] text-[14px] font-["Gotham-medium"] mb-[8px] max-w-[300px]'>
              Фото номера
            </Text>
            <FlatList
              data={sliderData}
              renderItem={({ item }) => <SliderItem item={item} />}
              horizontal
              showsHorizontalScrollIndicator
              pagingEnabled
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View className='mb-[24px]'>
            <Text className='text-[#000] text-[14px] font-["Gotham-medium"] mb-[8px]'>
              Что включено
            </Text>
            <TouchableOpacity className='flex items-center justify-center bg-[#6aaf7533] rounded-[4px] h-[23px] w-[86px]'>
              <Text className='text-[10px] text-[#6AAF75] font-["Gotham-normal"]'>
                Завтрак
              </Text>
            </TouchableOpacity>
          </View>

          <View className='bg-white rounded-[16px] p-[16px] flex flex-row justify-between items-center'>
            <View>
              <Text className='text-[#878787] text-[13px] font-["Gotham-normal"] tracking-[-1px]'>
                Цена за 1 ночь:
              </Text>
              <Text className='text-[#424242] text-[17px] font-["Gotham-medium"] tracking-[-1px]'>
                {receivedProp.priceFrom} ₽
              </Text>
            </View>
            <View className='w-[50%]'>
              <TouchableOpacity className='flex items-center justify-center bg-primary rounded-[10px] h-[45px] w-full'>
                <Text className='text-[14px] text-white font-["Gotham-medium"]'>
                  Забронировать
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
