import { TextInput, View, Image } from 'react-native';
import { useFontLoader } from '../hooks/useFontLoader.ts';
import clock from '../assets/clock.png';

interface CustomInputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  errorValidate?: boolean;
  borderBlue?: boolean;
  isClock?: boolean;
  isPassword?: boolean;
}

export const CustomInput = ({
  value,
  placeholder,
  onChange,
  errorValidate = false,
  borderBlue = false,
  isClock = false,
  isPassword = false,
}: CustomInputProps) => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className='mt-[16px] relative'>
      {!isClock && (
        <TextInput
          secureTextEntry={isPassword}
          defaultValue={value}
          className={`text-[#424242] p-[15px] rounded-[10px]
           bg-white font-["Gotham-normal"] border-solid border-[1px] ${
             errorValidate ? 'border-[#FF3B30]' : 'border-[#ffffff]'
           } ${borderBlue ? 'border-primary' : ''}`}
          placeholder={placeholder}
          onChangeText={onChange}
        />
      )}
      {isClock && (
        <View>
          <TextInput
            defaultValue={value}
            className='text-[#424242] p-[10px] rounded-[10px]
           bg-white font-["Gotham-normal"] border-solid border-primary border-[1px] w-[100%]'
            placeholder={placeholder}
            onChangeText={onChange}
          />
          <Image
            className='absolute top-[12px] right-[10px] h-[24px] w-[24px]'
            source={clock}
          />
        </View>
      )}
    </View>
  );
};
