import { View, Image } from 'react-native';

export const SliderItem = ({ item }) => {
  return (
    <View>
      <Image source={item.image} />
    </View>
  );
};
