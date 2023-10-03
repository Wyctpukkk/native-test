import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useFontLoader } from '../../hooks/useFontLoader.ts';
import lupa from '../../assets/lupa.png';
import sortGrey from '../../assets/sort-grey.png';
import sortWhite from '../../assets/sort-white.png';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  isSortFavorite?: boolean;
  sortFavoriteActive?: boolean;
  isCustom?: boolean;
  customText?: string;
  customDiv?: string;
  isStandart?: boolean;
  isSmallBlock?: boolean;
  isActive?: boolean;
  isSearchRequest?: boolean;
}
export const CustomButton = ({
  text,
  onPress,
  isSortFavorite,
  sortFavoriteActive,
  isCustom,
  isStandart,
  customDiv,
  customText,
  isSmallBlock = false,
  isActive = false,
  isSearchRequest = false,
}: CustomButtonProps) => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      {isSortFavorite && (
        <TouchableOpacity
          onPress={onPress}
          className={
            sortFavoriteActive
              ? 'bg-primary px-[8px] h-[28px] rounded-[10px] flex flex-row items-center justify-center ml-[8px]'
              : 'bg-white px-[8px] h-[28px] rounded-[10px] flex flex-row items-center justify-center ml-[8px]'
          }
        >
          <Text
            className={
              sortFavoriteActive
                ? 'text-white font-["Gotham-medium"]'
                : 'text-[#99A0A3] font-["Gotham-medium"]'
            }
          >
            {text}
          </Text>
          {sortFavoriteActive ? (
            <Image className='h-[16px] w-[16px]' source={sortWhite} />
          ) : (
            <Image className='h-[16px] w-[16px]' source={sortGrey} />
          )}
        </TouchableOpacity>
      )}
      {isCustom && (
        <TouchableOpacity onPress={onPress} className={customDiv}>
          <Text className={customText}>{text}</Text>
        </TouchableOpacity>
      )}
      {isStandart && (
        <TouchableOpacity
          onPress={onPress}
          className='flex items-center justify-center bg-primary rounded-[10px] h-[50px] mt-[24px]'
        >
          <Text className='text-[16px] text-white font-["Gotham-medium"]'>
            {text}
          </Text>
        </TouchableOpacity>
      )}
      {isSmallBlock && (
        <TouchableOpacity
          onPress={onPress}
          className={`flex items-center justify-center h-[28px] mt-[24px] w-full border-solid border-b-[3px] ${
            isActive ? 'border-primary' : 'border-white'
          } `}
        >
          <Text className='text-[16px] text-[#000] font-["Gotham-medium"] mt-[-10px]'>
            {text}
          </Text>
        </TouchableOpacity>
      )}
      {isSearchRequest && (
        <TouchableOpacity
          className='text-[#424242] p-[10px] pl-[40px] rounded-[10px] mt-[18px]
             bg-white font-["Gotham-normal"] border-solid border-primary border-[1px] w-[100%] h-[50px] flex items-start justify-center'
          onPress={onPress}
        >
          <Image
            className='absolute top-[15px] left-[15px] h-[16px] w-[16px]'
            source={lupa}
          />
          <Text className='text-[14px] text-[#000] font-["Gotham-normal"] '>
            {text}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
