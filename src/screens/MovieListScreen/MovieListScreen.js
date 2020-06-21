import React, {useEffect, useMemo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getPopularMovies} from '../../store/actions/movies';
import {ListItem} from 'react-native-elements';
import {FlatList, StyleSheet} from 'react-native';
import Loader from '../../components/Loader';

const MovieList = ({navigation}) => {
  const dispatch = useDispatch();

  const {data, loading} = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getPopularMovies());
  }, []);
  const keyExtractor = (item, index) => index.toString();

  const items = () =>
    useMemo(() => {
      return [...data.title];
    }, [data.title]);

  const {container} = styles;

  const navigateToDetailMovie = (item) => {
    console.log('item: ', item);
    navigation.navigate('MovieDetail', {
      item,
    });
  };

  const renderItem = ({item}) => (
    <ListItem
      title={item.title}
      bottomDivider
      chevron
      onPress={() => navigateToDetailMovie(item)}
    />
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default MovieList;
