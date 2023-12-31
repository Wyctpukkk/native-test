/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export function useFontLoader() {
  const [fontsLoaded] = useFonts({
    'Gotham-bold': require('../assets/fonts/gotham_bold.otf'),
    'Gotham-normal': require('../assets/fonts/gotham_book.otf'),
    'Gotham-light': require('../assets/fonts/gotham_light.otf'),
    'Gotham-medium': require('../assets/fonts/gotham_medium.otf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (error) {
        alert('Ошибка в загрузке шрифтов');
      }
    }
    prepare();

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded;
}
