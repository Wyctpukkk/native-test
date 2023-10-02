/* eslint-disable no-shadow */
import { View, Text, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { useFontLoader } from '../hooks/useFontLoader.ts';

import { CustomInput } from './CustomInput.tsx';
import { CustomButton } from './CustomButton.tsx';
import { CustomDatapicker } from './CustomDatapicker.tsx';
import { SignOut } from './SignOut.tsx';

interface BigSearchBlockProps {
  location: string;
  setLocation: (value: string) => void;
  show: boolean;
  setShow: (value: boolean) => void;
  setDateInCalendar: (selectedDate: Date | undefined) => void;
  showDatepicker: () => void;
  date: string;
  countDays: number;
  countDayNumber: (value: string) => void;
  searchHotels: () => void;
}

export const BigSearchBlock = ({
  location,
  setLocation,
  show,
  setShow,
  setDateInCalendar,
  showDatepicker,
  date,
  countDays,
  countDayNumber,
  searchHotels,
}: BigSearchBlockProps) => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  const hideDatePicker = () => {
    setShow(false);
  };

  return (
    <View>
      <SignOut />

      <View
        className='bg-white rounded-[16px] p-[16px] box-border mt-[24px]'
        // eslint-disable-next-line no-use-before-define
        style={[styles.boxShadow, styles.androidShadow]}
      >
        <Text className='text-[18px] font-["Gotham-bold"] font-[700]'>
          Куда едем?
        </Text>

        <CustomInput
          borderBlue
          value={location}
          placeholder='Локация'
          onChange={setLocation}
        />

        <View>
          <DateTimePickerModal
            isVisible={show}
            mode='date'
            onConfirm={setDateInCalendar}
            onCancel={hideDatePicker}
          />
        </View>

        <View className='flex flex-row justify-between'>
          <View className='w-[47%]'>
            <CustomDatapicker onPress={showDatepicker} value={date} />
          </View>

          <View className='w-[47%]'>
            <CustomInput
              isClock
              borderBlue
              value={String(countDays)}
              placeholder='Кол-во дней'
              onChange={countDayNumber}
            />
          </View>
        </View>
        <CustomButton isStandart text='Найти' onPress={searchHotels} />
      </View>
      <Text className='text-[18px] font-[700] font-["Gotham-bold"] mt-[24px]'>
        Подходящие бронирования
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#333333',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  androidShadow: {
    elevation: 10,
  },
});
