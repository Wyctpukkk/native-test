import { View, Image, StyleSheet } from 'react-native';

export interface IItem {
  id: number;
  image: string;
}

interface ISliderItem {
  item: IItem;
}

export const SliderItem = ({ item }: ISliderItem) => {
  return (
    <View
      className='w-[139px] h-[200px] mb-[24px] rounded-[10px] box-border mr-[16px]'
      // eslint-disable-next-line no-use-before-define
      style={[styles.boxShadow, styles.androidShadow]}
    >
      <Image
        className='h-full w-full mr-[16px] rounded-[10px]'
        source={{ uri: item?.image }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
