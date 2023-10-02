import React from 'react';
import { View } from 'react-native';
import { CustomButton } from './CustomButton.tsx';
import { finallyRequestInString } from '../helpers/finallyRequestInString.ts';

interface SmallSearchBlockProps {
  location: string;
  countDays: number;
  checkIn: string;
  backToBigSearchBlock: () => void;
}

export const SmallSearchBlock = ({
  location,
  countDays,
  checkIn,
  backToBigSearchBlock,
}: SmallSearchBlockProps) => {
  const currentRequest = () => {
    const requestString = finallyRequestInString(location, checkIn, countDays);
    return requestString;
  };
  currentRequest();
  return (
    <View className='p-[32.5px] bg-white rounded-[16px]'>
      <CustomButton
        isSearchRequest
        text={currentRequest()}
        onPress={backToBigSearchBlock}
      />
      <View className='flex flex-row justify-between'>
        <View className='w-[45%]'>
          <CustomButton isSmallBlock text='Поиск' isActive />
        </View>
        <View className='w-[45%]'>
          <CustomButton isSmallBlock text='Избранное' />
        </View>
      </View>
    </View>
  );
};
