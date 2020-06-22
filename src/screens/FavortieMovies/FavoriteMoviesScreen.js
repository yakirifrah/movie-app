
import React from 'react';
import {Text,View,FlatList,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MovieListItem from '../../../src/components/MovieListItem';

const FavoriteMoviesScreen = () => {
const {container} = styles;
const {favoriteMovies} = useSelector(state => state.movies);
  const navigation = useNavigation();
const onListItemPress = movie => {
    navigation.navigate('Movie', {movie});
  };

  const renderItem = ({item}: {item: movie}) => (
    <MovieListItem key={item.key} item={item} onPress={onListItemPress} />
  );
    const keyExtractor = (item, index) => index.toString();
return (
<>
{!favoriteMovies.length ?
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20}}>Empty favorite movies</Text>
    </View>
:
 <View style={container}>
      <FlatList
        data={favoriteMovies}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={keyExtractor}/>
    </View>
    }
</>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:15,
  },
});

export default FavoriteMoviesScreen;
