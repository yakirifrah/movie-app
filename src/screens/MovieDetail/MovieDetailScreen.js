import {Animated, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {toggleFavoriteMovie} from '../../store/actions/movies';
import config from '../../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

const MovieDetailScreen = ({route}) => {
  const {title, poster_path, overview, vote_average, id} = route.params.item;
  const {toggleFavorite, data} = useSelector((state) => state.movies);
  console.log(
    'data with id: ',
    data.find((obj) => obj.id === id),
  );
  console.log(
    'data with favorite: ',
    data.find((obj) => obj.id === id).favorite,
  );

  const [visible, setVisible] = useState(false);
  const AnimatedIcon = Animated.createAnimatedComponent(AntDesign);
  const currentValue = new Animated.Value(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toggleFavorite) {
      Animated.spring(currentValue, {
        toValue: 2,
        useNativeDriver: true,
      }).start(() => {
        Animated.spring(currentValue, {
          toValue: 1,
          useNativeDriver: true,
        }).start(() => {
          setVisible(false);
        });
      });
    }
  }, [toggleFavorite]);
  return (
    <View style={{flex: 1}}>
      {visible && (
        <AnimatedIcon
          name={'heart'}
          size={50}
          color="red"
          style={{
            position: 'absolute',
            top: 120,
            left: '40%',
            elevation: 4,
            zIndex: 3,
            transform: [{scale: currentValue}],
          }}
        />
      )}

      <Card title={title} image={{uri: `${config.API_IMG_URL}${poster_path}`}}>
        <Text style={{marginBottom: 10}}>{overview}</Text>
        <Text style={{marginBottom: 10}}>{vote_average}</Text>
        <AntDesign
          name={data.find((obj) => obj.id === id).favorite ? 'heart' : 'hearto'}
          size={30}
          color={'red'}
          onPress={() => {
            if (!toggleFavorite) {
              setVisible(true);
            }
            dispatch(toggleFavoriteMovie(id, route.params.item));
          }}
        />
      </Card>
    </View>
  );
};

export default MovieDetailScreen;
