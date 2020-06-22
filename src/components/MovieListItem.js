import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import config from '../config';
import {SharedElement} from 'react-navigation-shared-element';

const windowWidth = Dimensions.get('window').width;

export default (props) => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item);
      }}
    >
      <View style={styles.movie}>
        <SharedElement id={`item.${item.key}.photo`}>
          <Image
            source={{uri: `${config.API_IMG_URL}${item.poster_path}`}}
            style={styles.image}
            resizeMode="contain"
          />
        </SharedElement>
        <SharedElement id={`item.${item.key}.title`}>
          <Text style={styles.text} numberOfLines={1}>
            {item.title}
          </Text>
        </SharedElement>
        <SharedElement id={`item.${item.key}.vote_average`}>
          <Text style={styles.text}>{item.vote_average}</Text>
        </SharedElement>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 140,
    width: windowWidth / 2 - 30,
  },
  text: {
    margin: 3,
    textAlign: 'center',
  },
  movie: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth / 2,
    marginBottom: 5,
  },
});
