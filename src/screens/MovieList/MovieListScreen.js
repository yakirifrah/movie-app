import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getPopularMovies} from '../../store/actions/movies';
import {ListItem} from 'react-native-elements';
import {FlatList, StyleSheet} from 'react-native';
import Loader from '../../components/Loader';
import SearchBar from '../../components/SearchBar';
const MovieList = ({navigation}) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const {data, loading} = useSelector((state) => state.movies);
  useEffect(() => {
    if (!data.length) {
      dispatch(getPopularMovies());
    }
  }, [data.length]);
  const keyExtractor = (item, index) => index.toString();

  const navigateToDetailMovie = (item) => {
    navigation.navigate('MovieDetail', {
      item,
    });
  };
  const onchangeValue = (search) => {
    setSearch(search);
  };
  const renderItem = ({item}) => (
    <ListItem
      title={item.title}
      bottomDivider
      chevron
      onPress={() => navigateToDetailMovie(item)}
    />
  );

  let filterData = data.filter((movie) => {
    return movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <SearchBar search={search} searchValueChange={onchangeValue} />
          <FlatList
            data={filterData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: '5%',
  },
});

export default MovieList;
