import { View, Text } from 'react-native';

import { CustomButton } from './UI/CustomButton.tsx';
import { useFontLoader } from '../hooks/useFontLoader.ts';

interface ISortBlock {
  sortFavorite: boolean;
  changeSetSortFavorites: (value: boolean) => void;
}

export const SortBlock = ({
  sortFavorite,
  changeSetSortFavorites,
}: ISortBlock) => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className='flex flex-row items-center justify-between'>
      <Text className='text-[#000] text-[14px] font-["Gotham-medium"]'>
        Сортировать по
      </Text>

      <View className='flex flex-row'>
        <CustomButton
          isSortFavorite
          sortFavoriteActive={!sortFavorite}
          text='Рейтинг'
          onPress={() => {
            changeSetSortFavorites(false);
          }}
        />

        <CustomButton
          isSortFavorite
          sortFavoriteActive={sortFavorite}
          text='Цена'
          onPress={() => {
            changeSetSortFavorites(true);
          }}
        />
      </View>
    </View>
  );
};
