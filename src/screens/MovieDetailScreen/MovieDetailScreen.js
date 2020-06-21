import {Text} from 'react-native';
import React from 'react';
import {Card, ListItem, Button, Icon} from 'react-native-elements';
import config from '../../config/config';
const MovieDetailScreen = ({route}) => {
  const {title, poster_path, overview, vote_average} = route.params.item;
  return (
    <Card title={title} image={{uri: `${config.API_IMG_URL}${poster_path}`}}>
      <Text style={{marginBottom: 10}}>{overview}</Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};

export default MovieDetailScreen;
