import React from 'react';
import IconWithBadge from '../components/Badge';
import {useSelector} from 'react-redux';

export const FavoriteMovieIconWithBadge = (props) => {
  const {favoriteMovies} = useSelector((state) => state.movies);
  return <IconWithBadge {...props} badgeCount={favoriteMovies.length} />;
};
