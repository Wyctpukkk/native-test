/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  formatDateDot,
  formatDateDash,
  dayCount,
} from '../helpers/formatDataHelpers.ts';

import { HotelsList } from '../components/HotelsList.tsx';
import { BigSearchBlock } from '../components/SearchBloks/BigSearchBlock.tsx';
import { SmallSearchBlock } from '../components/SearchBloks/SmallSearchBlock.tsx';

interface StartedValuesInterface {
  location: string;
  countDays: number;
}

const startedValues: StartedValuesInterface = {
  location: 'Москва',
  countDays: 1,
};

const initialDate = new Date();

export const MainScreen = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState<string>(startedValues.location);
  const [date, setDate] = useState<string>(formatDateDot(initialDate));
  const [checkIn, setCheckIn] = useState<string>(formatDateDash(initialDate));
  const [countDays, setCountDays] = useState<number>(startedValues.countDays);
  const [checkOut, setCheckOut] = useState<string>(
    dayCount(+countDays, checkIn)
  );

  const [isResultsLoaded, setIsResultsLoaded] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [sortFavorites, setSortFavorites] = useState<boolean>(false);

  const countDayNumber = (number: string) => {
    if (number) {
      setCountDays(+number);
      setCheckOut(dayCount(+number, checkIn));
    }
  };

  const loadHotels = (
    location: string,
    checkIn: string,
    checkOut: string
  ): void => {
    dispatch({
      type: 'LOAD_HOTELS',
      payload: { location, checkIn, checkOut },
    });
  };

  useEffect(() => {
    loadHotels(location, checkIn, checkOut);
  }, []);

  const setDateInCalendar = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(formatDateDot(selectedDate));
      setCheckIn(formatDateDash(selectedDate));
      setCheckOut(dayCount(+countDays, formatDateDash(selectedDate)));
    }
    setShow(false);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const backToBigSearchBlock = () => {
    setIsResultsLoaded(false);
    setShowFavorites(false);
  };

  const searchHotels = () => {
    loadHotels(location, checkIn, checkOut);
    setIsResultsLoaded(true);
  };

  const showPageFavorites = (value: boolean) => {
    setShowFavorites(value);
    setSortFavorites(false);
    dispatch({ type: 'SORT_FAVOR', payload: 'stars' });
  };

  const changeSetSortFavorites = (value: boolean) => {
    if (value) {
      dispatch({ type: 'SORT_FAVOR', payload: 'priceFrom' });
      setSortFavorites(true);
    } else {
      dispatch({ type: 'SORT_FAVOR', payload: 'stars' });
      setSortFavorites(false);
    }
  };

  return (
    <ScrollView>
      {isResultsLoaded && (
        <SmallSearchBlock
          location={location}
          countDays={countDays}
          checkIn={checkIn}
          backToBigSearchBlock={backToBigSearchBlock}
          showPageFavorites={showPageFavorites}
          showFavorites={showFavorites}
        />
      )}
      <View className='bg-[#F4F4F4] w-full h-full px-[16px] '>
        <StatusBar />
        {!isResultsLoaded && (
          <BigSearchBlock
            location={location}
            setLocation={setLocation}
            show={show}
            setShow={setShow}
            setDateInCalendar={setDateInCalendar}
            showDatepicker={showDatepicker}
            date={date}
            countDays={countDays}
            countDayNumber={countDayNumber}
            searchHotels={searchHotels}
          />
        )}
        <View>
          <HotelsList
            showFavorites={showFavorites}
            sortFavorite={sortFavorites}
            changeSetSortFavorites={changeSetSortFavorites}
          />
        </View>
      </View>
    </ScrollView>
  );
};
