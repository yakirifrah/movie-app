import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, MovieDetailScreen} from '../screens';
import TabStack from './tabs';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="TabStack"
        component={TabStack}
        options={{
          title: 'Movies',
          headerBackTitleVisible: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={(navigation) => ({
          title: navigation.route.params.item.title,
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default Router;
