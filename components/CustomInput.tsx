import { TextInput, View } from 'react-native';
import { useFontLoader } from '../hooks/useFontLoader.ts';

interface CustomInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  errorValidate: boolean;
}

export const CustomInput = ({ placeholder, onChange, errorValidate }: CustomInputProps) => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className='mt-[16px]'>
      <TextInput
        className={`text-[#424242] p-[15px] rounded-[10px] bg-white font-["Gotham-normal"] ${
          errorValidate ? 'border-solid border-[1px] border-[#FF3B30]' : 'border-[#ffffff]'
        }`}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};
