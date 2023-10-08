import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthScreen } from '../screens/AuthScreen.tsx';
import { MainScreen } from '../screens/MainScreen.tsx';
import { HotelScreen } from '../screens/HotelScreen.tsx';

import { type InitialInterface } from '../redux/reducers.ts';

const Stack = createNativeStackNavigator();

export const NavigationBlock = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: InitialInterface) => state.user);

  useEffect(() => {
    dispatch({
      type: 'CHECK_USER',
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
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
