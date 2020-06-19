import React from 'react';
import {View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';

const ImageUser = () => {
  const {data} = useSelector((state) => state.auth);
  const imgSrc = data && data.picture ? data.picture.data.url : false;

  return (
    <View>
      {imgSrc && (
        <Avatar
          size="xlarge"
          rounded
          source={{
            uri: imgSrc,
          }}
        />
      )}
      {!imgSrc && (
        <Avatar
          size="xlarge"
          rounded
          icon={{name: 'user', type: 'font-awesome'}}
          activeOpacity={0.7}
          containerStyle={{backgroundColor: '#E8E8E8'}}
        />
      )}
    </View>
  );
};

export default ImageUser;
