import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

import FacebookLogin from '../../components/FacebookLogin';
import GoogleLogin from '../../components/GoogleLogin';
import Title from '../../components/Title';
import ImageUser from '../../components/ImageUser';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../../components/Loader';

const LoginScreen = ({navigation}) => {
  const {container, main, footer} = styles;
  const {data, loading} = useSelector((state) => state.auth);
  const msg = data ? `Welcome ${data.name}` : 'Welcome Stranger!';

  const renderButton = () => {
    if (!data) {
      return (
        <>
          <FacebookLogin />
          <GoogleLogin />
        </>
      );
    }
    return (
      <>
        <Icon.Button
          size={20}
          name={'film'}
          backgroundColor="#3b5998"
          onPress={() => navigation.navigate('TabStack')}
          solid
        >
          <Text style={{color: '#F5FBFF', paddingLeft: 20, paddingRight: 20}}>
            List Movies
          </Text>
        </Icon.Button>
        <FacebookLogin />
      </>
    );
  };

  const renderSubTitle = () => {
    if (!data) {
      return (
        <>
          <Text style={{paddingTop: 4, fontSize: 16}}>
            Please log in to continue{'\n'} to the awesomeness
          </Text>
        </>
      );
    }
  };

  return (
    <View style={container}>
      {loading && <Loader />}
      {!loading && (
        <>
          <View style={main}>
            <Title msg={msg} color={'black'} size={20} />
            <ImageUser />
            {renderSubTitle()}
          </View>
          <View style={footer}>{renderButton()}</View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: '100%',
    width: '100%',
  },
  main: {
    height: '50%',
    textAlign: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    top: 80,
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    bottom: 50,
    alignSelf: 'center',
    position: 'absolute',
  },
});
export default LoginScreen;
