import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthScreen } from '../screens/AuthScreen.tsx';
import { StartScreen } from '../screens/StartScreen.tsx';
import { HotelPreview } from '../screens/HotelPreview.tsx';

const Stack = createNativeStackNavigator();

export const NavigationBlock = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  useEffect(() => {
    dispatch({
      type: 'CHECK_USER',
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!store.user ? (
          <Stack.Screen
            name='Auth'
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name='Start'
            component={HotelPreview}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
