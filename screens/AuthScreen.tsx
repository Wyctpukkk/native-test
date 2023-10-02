import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';

import bgAuth from '../assets/bg.png';
import { CustomInput } from '../components/CustomInput.tsx';
import { useFontLoader } from '../hooks/useFontLoader.ts';
import { CustomButton } from '../components/CustomButton.tsx';
import { validateUser } from '../helpers/validateUser.ts';

export const AuthScreen = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorValidate, setErrorValidate] = useState<boolean>(false);

  const logIn = () => {
    validateUser(login, password)
      ? dispatch({
          type: 'SET_USER',
          payload: login,
        })
      : setErrorValidate(true);
  };

  // Подгрузка шрифта
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='w-full h-full'>
      <StatusBar />
      <Image
        className='absolute top-0 left-0 h-[120vh] w-full'
        source={bgAuth}
      />
      <View className='mt-[141px] px-[16px] z-[10]'>
        <Text className='text-white text-[18px] font-["Gotham-normal"]'>
          Добро пожаловать в
        </Text>
        <Text className='text-white text-[24px] font-700 font-["Gotham-bold"] mb-[16px]'>
          Simple Hotel Check
        </Text>
        <CustomInput
          value={login}
          placeholder='Логин'
          onChange={setLogin}
          errorValidate={errorValidate}
        />
        <CustomInput
          isPassword
          value={password}
          placeholder='Пароль'
          onChange={setPassword}
          errorValidate={errorValidate}
        />
        {errorValidate && (
          <Text className='text-white text-[12px] mt-[8px]'>
            Неверный логин или пароль. Повторите попытку
          </Text>
        )}
        <CustomButton
          isStandart
          text='Войти'
          onPress={() => {
            logIn();
          }}
        />
      </View>
    </View>
  );
};
