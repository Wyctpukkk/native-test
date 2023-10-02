import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { type initialProps } from '../redux/reducers.ts';

import { useFontLoader } from '../hooks/useFontLoader.ts';
import { HotelsCart } from './HotelsCart.tsx';

export const HotelsList = () => {
  const store = useSelector((state: initialProps) => state);
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='mt-[16px]'>
      {store.hotels.length > 0 && (
        <FlatList
          data={store.hotels}
          renderItem={({ item }) => <HotelsCart hotel={item} />}
          keyExtractor={(item) => item.hotelId.toString()}
        />
      )}
    </View>
  );
};
