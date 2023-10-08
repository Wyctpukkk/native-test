import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { useFontLoader } from '../hooks/useFontLoader.ts';
import exitIcon from '../assets/exit.png';

export const SignOut = () => {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch({
      type: 'DEL_USER',
    });
  };

  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className='flex flex-row justify-between pt-[69px]'>
      <Text className='text-[24px] font-["Gotham-bold"] font-[700]'>
        Simple Hotel Check
      </Text>

      <TouchableOpacity
        onPress={() => {
          logOutUser();
        }}
      >
        <Image className='h-[24px] w-[24px]' source={exitIcon} />
      </TouchableOpacity>
    </View>
  );
};
