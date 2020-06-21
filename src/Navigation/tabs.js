import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import {MovieScreen, FavoriteMoviesScreen} from '../screens/index';
const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="popular movies"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#2b61dd',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}>
      <Tab.Screen
        name="MovieList"
        component={MovieScreen}
        options={{
          tabBarLabel: 'popular movies',
        }}
      />
      <Tab.Screen
        name="FavoriteMovie"
        component={FavoriteMoviesScreen}
        options={{
          tabBarLabel: 'my favorite movies',
        }}
      />
    </Tab.Navigator>
  );
};
export default TabStack;
