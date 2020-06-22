import {Text} from 'react-native';
import React from 'react';

const Title = ({msg, size, color}) => {
  return (
    <>
      <Text style={{fontSize: size, color, paddingTop: 15}}>{msg}</Text>
    </>
  );
};

export default Title;
