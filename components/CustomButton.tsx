import { TouchableOpacity, Text } from 'react-native';
import { useFontLoader } from '../hooks/useFontLoader.ts';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}
export const CustomButton = ({ text, onPress }: CustomButtonProps) => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className='flex items-center justify-center bg-primary rounded-[10px] h-[50px] mt-[24px]'
    >
      <Text className='text-[16px] text-white font-["Gotham-medium"]'>{text}</Text>
    </TouchableOpacity>
  );
};
