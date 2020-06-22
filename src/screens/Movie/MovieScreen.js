import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import config from '../../config';
import {SharedElement} from 'react-navigation-shared-element';
import Title from '../../components/Title';
const FavMovieScreen = () => {
  const route = useRoute();
  const {movie} = route.params;

  return (
    <ScrollView style={styles.container}>
      <SharedElement id={`item.${movie.key}.photo`}>
        <Image
          source={{uri: `${config.API_IMG_URL}${movie.poster_path}`}}
          resizeMode="contain"
          style={styles.image}
        />
      </SharedElement>

      <View style={styles.titleWrap}>
        <SharedElement id={`item.${movie.key}.title`}>
          <Text style={styles.text}>{movie.title}</Text>
        </SharedElement>
        <Title msg={'overview'} color={'#2980b9'} size={20} />
      </View>
      <Text style={styles.description}> {movie.overview}</Text>
      <Text style={styles.vote}>vote: {movie.vote_average}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  image: {
    height: 273,
    width: '100%',
  },
  text: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 16,
  },
  titleWrap: {
    margin: 10,
    flex: 1,
    alignItems: 'center',
  },
  description: {
    margin: 10,
  },
  vote: {
    textAlign: 'center',
  },
});

export default FavMovieScreen;
