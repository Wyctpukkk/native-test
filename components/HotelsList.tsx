import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { type initialProps } from '../redux/reducers.ts';

import { useFontLoader } from '../hooks/useFontLoader.ts';
import { HotelsCart } from './HotelsCart.tsx';
import { SortBlock } from './SortBlock.tsx';

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
  const store = useSelector((state: initialProps) => state);
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='mt-[16px]'>
      {store.hotels.length > 0 && !showFavorites && (
        <FlatList
          data={store.hotels}
          renderItem={({ item }) => <HotelsCart hotel={item} />}
          keyExtractor={(item) => item.hotelId.toString()}
        />
      )}
      {store.favor.length > 0 && showFavorites && (
        <View>
          <SortBlock
            sortFavorite={sortFavorite}
            changeSetSortFavorites={changeSetSortFavorites}
          />
          <FlatList
            data={store.favor}
            renderItem={({ item }) => <HotelsCart hotel={item} />}
            keyExtractor={(item) => item.hotelId.toString()}
          />
        </View>
      )}
    </View>
  );
};
