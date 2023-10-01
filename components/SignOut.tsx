import { View, Text, Image } from 'react-native';
import { useFontLoader } from '../hooks/useFontLoader.ts';
import exitIcon from '../assets/exit.png';

export const SignOut = () => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className='flex flex-row justify-between pt-[69px]'>
      <Text className='text-[24px] font-["Gotham-bold"] font-[700]'>
        Simple Hotel Check
      </Text>
      <Image className='h-[24px] w-[24px]' source={exitIcon} />
    </View>
  );
};
