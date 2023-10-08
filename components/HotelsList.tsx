import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { HotelsCart } from './HotelsCart.tsx';
import { SortBlock } from './SortBlock.tsx';

import { type InitialInterface } from '../redux/reducers.ts';
import { useFontLoader } from '../hooks/useFontLoader.ts';

interface HotelsListProps {
  showFavorites: boolean;
  sortFavorite: boolean;
  changeSetSortFavorites: (value: boolean) => void;
}

export const HotelsList = ({
  showFavorites,
  sortFavorite,
  changeSetSortFavorites,
}: HotelsListProps) => {
  const favor = useSelector((state: InitialInterface) => state.favor);
  const hotels = useSelector((state: InitialInterface) => state.hotels);
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='mt-[16px]'>
      {hotels.length > 0 && !showFavorites && (
        <FlatList
          className='flex'
          data={hotels}
          renderItem={({ item }) => <HotelsCart hotel={item} />}
          keyExtractor={(item) => item.hotelId.toString()}
        />
      )}

      {favor.length > 0 && showFavorites && (
        <View>
          <SortBlock
            sortFavorite={sortFavorite}
            changeSetSortFavorites={changeSetSortFavorites}
          />

          <FlatList
            data={favor}
            renderItem={({ item }) => <HotelsCart hotel={item} />}
            keyExtractor={(item) => item.hotelId.toString()}
          />
        </View>
      )}
    </View>
  );
};
