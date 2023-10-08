/* eslint-disable no-alert */
import { select, call, put, takeEvery } from 'redux-saga/effects';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { getHotelsList } from '../api/getHotelsList.ts';
import { type InitialInterface } from './reducers.ts';
import { type IHotelInfo } from '../interfaces/apiInterface.ts';

export function* loadHotelsList({
  payload,
}: {
  payload: {
    location: string;
    checkIn: string;
    checkOut: string;
    count: string;
  };
}): Generator {
  const { location, checkIn, checkOut } = payload;

  try {
    const data = yield call(getHotelsList, location, checkIn, checkOut);

    yield put({ type: 'LOAD_HOTELS_SUCCESS', payload: data });
  } catch {
    alert('Ошибка ответа сервера (saga)');
  }
}

export function* addFavorite({ payload }: { payload: IHotelInfo }) {
  try {
    yield put({ type: 'ADD_FAVOR_SUCCESS', payload });
  } catch (err) {
    alert('Ошибка добавления в избранное');
  }
}

export function* delFavorite({ payload }: { payload: IHotelInfo }) {
  const state: InitialInterface = yield select((store) => store);

  const data = state.favor.filter(
    (obj: IHotelInfo) => obj.hotelId !== payload.hotelId
  );

  yield put({ type: 'DEL_FAVOR_SUCCESS', payload: data });
}

export function* sortFavorite({ payload }: { payload: string }) {
  const state: InitialInterface = yield select((store) => store);

  const sorted = () => {
    if (payload === 'priceFrom') {
      return state.favor.sort((a, b) => b.priceFrom - a.priceFrom);
    }
    if (payload === 'stars') {
      return state.favor.sort((a, b) => b.stars - a.stars);
    }
  };

  try {
    const data = sorted();
    yield put({ type: 'SORT_FAVOR_SUCCESS', payload: data });
  } catch (err) {
    alert('ошибка сортировки');
  }
}

export function* setUser({ payload }: { payload: string }) {
  try {
    yield AsyncStorage.setItem('user', payload);
  } catch (err) {
    alert('Не получилось добавить User в сторедж');
  }
}

export function* checkUser(): Generator<any, void, string | null> {
  try {
    const user = yield AsyncStorage.getItem('user');
    yield put({ type: 'CHECK_USER_SUCCESS', payload: user });
  } catch (err) {
    alert('Отсутствует User в сторедж (getItem)');
  }
}

export function* deleteUser(): Generator<any, void, string | null> {
  try {
    yield AsyncStorage.removeItem('user');
  } catch (err) {
    alert('Отсутствует User в сторедж (removeItem)');
  }
}

export default function* rootSaga() {
  // вотчеры
  yield takeEvery('LOAD_HOTELS', loadHotelsList);
  yield takeEvery('ADD_FAVOR', addFavorite);
  yield takeEvery('DEL_FAVOR', delFavorite);
  yield takeEvery('SORT_FAVOR', sortFavorite);
  yield takeEvery('SET_USER', setUser);
  yield takeEvery('CHECK_USER', checkUser);
  yield takeEvery('DEL_USER', deleteUser);
}
