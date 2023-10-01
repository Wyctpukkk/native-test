import { View, Image, Pressable, Text } from 'react-native';
import { useFontLoader } from '../hooks/useFontLoader.ts';
import calendar from '../assets/calendar.png';

interface CustomDatapickerProps {
  value: string;
  onPress: () => void;
}

export const CustomDatapicker = ({ value, onPress }: CustomDatapickerProps) => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className='mt-[16px]'>
      <Pressable
        className='rounded-[10px]
         border-solid border-primary border-[1px] w-[100%] h-[50px] flex  justify-center'
        onPress={onPress}
      >
        <Text className='text-[#424242] font-["Gotham-normal"] p-[10px]'>
          {value}
        </Text>
      </Pressable>
      <Image
        className='absolute top-[12px] right-[10px] h-[24px] w-[24px]'
        source={calendar}
      />
    </View>
  );
};
