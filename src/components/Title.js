import { Text } from 'react-native';
import React from 'react';



const Title = ({ msg }) => {
  return (
    <>
      <Text style={{ fontSize: 20 }}>{msg}</Text>
    </>
  );
}

export default Title;