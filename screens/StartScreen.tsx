import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useState } from 'react';

import { useFontLoader } from '../hooks/useFontLoader.ts';

import { CustomInput } from '../components/CustomInput.tsx';
import { CustomButton } from '../components/CustomButton.tsx';
import { CustomDatapicker } from '../components/CustomDatapicker.tsx';
import { formatDate } from '../helpers/formatDataToInput.ts';
import { SignOut } from '../components/SignOut.tsx';
import { HotelsList } from '../components/HotelsList.tsx';

interface StartedValuesInterface {
  location: string;
  countDays: string;
}

const startedValues: StartedValuesInterface = {
  location: 'Москва',
  countDays: '1',
};

export const StartScreen = () => {
  const [location, setLocation] = useState<string>(startedValues.location);
  const [data, setData] = useState<string>(formatDate(new Date()));
  const [countDays, setCountDays] = useState<string>(startedValues.countDays);
  const [datePicker, setDatePicker] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate ?? datePicker;
    setShow(false);
    setDatePicker(currentDate);
    setData(formatDate(currentDate));
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const searchHotels = () => {
    alert(countDays + data + location);
  };

  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='bg-[#F4F4F4] w-full h-full px-[16px] '>
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
        <SafeAreaView>
          {show && (
            <DateTimePicker
              testID='dateTimePicker'
              value={datePicker}
              mode='data'
              onChange={onChange}
            />
          )}
        </SafeAreaView>
        <View className='flex flex-row justify-between'>
          <View className='w-[47%]'>
            <CustomDatapicker onPress={showDatepicker} value={data} />
          </View>
          <View className='w-[47%]'>
            <CustomInput
              isClock
              borderBlue
              value={countDays}
              placeholder='Кол-во дней'
              onChange={setCountDays}
            />
          </View>
        </View>
        <CustomButton text='Найти' onPress={searchHotels} />
      </View>
      <View>
        <HotelsList />
      </View>
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
