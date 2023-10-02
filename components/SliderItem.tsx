import { View, Image, useWindowDimensions, StyleSheet } from 'react-native';

export const SliderItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <Image source={item.image} />
    </View>
  );
};
