import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthScreen } from '../screens/AuthScreen.tsx';
import { MainScreen } from '../screens/MainScreen.tsx';
import { type initialProps } from '../redux/reducers.ts';
import { HotelScreen } from '../screens/HotelScreen.tsx';

const Stack = createNativeStackNavigator();

export const NavigationBlock = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: initialProps) => state);

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
          <>
            <Stack.Screen
              name='MainScreen'
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='HotelScreen'
              component={HotelScreen}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
