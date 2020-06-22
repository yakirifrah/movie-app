import React from 'react';
import 'react-native-gesture-handler';
import {FavoriteMoviesScreen, favMovieScreen} from '../screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const favoriteRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoriteMovieList"
        component={FavoriteMoviesScreen}
        options={{title: 'Favorite'}}
      />
      <Stack.Screen
        name="Movie"
        component={favMovieScreen}
        options={(navigation) => ({
          title: navigation.route.params.movie.title,
          headerBackTitleVisible: false,
          cardStyleInterpolator: ({current: {progress}}) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {movie} = route.params;
          return [
            `item.${movie.key}.photo`,
            `item.${movie.key}.title`,
            `item.${movie.key}.vote_average`,
          ];
        }}
      />
    </Stack.Navigator>
  );
};

export default favoriteRoute;
