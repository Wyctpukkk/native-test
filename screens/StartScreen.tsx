/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { type Dispatch } from 'redux';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  formatDateDot,
  formatDateDash,
  dayCount,
} from '../helpers/formatDataHelpers.ts';

import { HotelsList } from '../components/HotelsList.tsx';
import { BigSearchBlock } from '../components/BigSearchBlock.tsx';
import { SmallSearchBlock } from '../components/SmallSearchBlock.tsx';

interface StartedValuesInterface {
  location: string;
  countDays: number;
}

const startedValues: StartedValuesInterface = {
  location: 'Москва',
  countDays: 1,
};

export const StartScreen = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<string>(startedValues.location);
  const [date, setDate] = useState<string>(formatDateDot(new Date()));
  const [checkIn, setCheckIn] = useState<string>(formatDateDash(new Date()));
  const [countDays, setCountDays] = useState<number>(startedValues.countDays);
  const [checkOut, setCheckOut] = useState(dayCount(+countDays, checkIn));

  const [datePicker, setDatePicker] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const [isResultsLoaded, setIsResultsLoaded] = useState<boolean>(false);

  const countDayNumber = (number: string) => {
    if (number) {
      setCountDays(+number);
      setCheckOut(dayCount(+number, checkIn));
    }
  };

  // поиск новых отелей

  const loadHotels = (
    dispatch: Dispatch,
    location: string,
    checkIn: string,
    checkOut: string,
    countDays: number
  ): void => {
    dispatch({
      type: 'LOAD_HOTELS',
      payload: { location, checkIn, checkOut, countDays },
    });
  };

  useEffect(() => {
    loadHotels(dispatch, location, checkIn, checkOut, countDays);
  }, []);

  const setDateInCalendar = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate ?? datePicker;
    setShow(false);
    setDatePicker(currentDate);
    setDate(formatDateDot(currentDate));
    setCheckIn(formatDateDash(currentDate));
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const backToBigSearchBlock = () => {
    setIsResultsLoaded(false);
  };

  const searchHotels = () => {
    loadHotels(dispatch, location, checkIn, checkOut, countDays);
    setIsResultsLoaded(true);
  };

  return (
    <ScrollView>
      {isResultsLoaded && (
        <SmallSearchBlock
          location={location}
          countDays={countDays}
          checkIn={checkIn}
          backToBigSearchBlock={backToBigSearchBlock}
        />
      )}
      <View className='bg-[#F4F4F4] w-full h-full px-[16px] '>
        <StatusBar />
        {!isResultsLoaded && (
          <BigSearchBlock
            location={location}
            setLocation={setLocation}
            show={show}
            datePicker={datePicker}
            setDateInCalendar={setDateInCalendar}
            showDatepicker={showDatepicker}
            date={date}
            countDays={countDays}
            countDayNumber={countDayNumber}
            searchHotels={searchHotels}
          />
        )}
        <View>
          <HotelsList />
        </View>
      </View>
    </ScrollView>
  );
};
