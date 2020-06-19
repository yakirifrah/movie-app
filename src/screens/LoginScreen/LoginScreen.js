import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import FacebookLogin from '../../components/FacebookLogin';
import GoogleLogin from '../../components/GoogleLogin';
import Title from '../../components/Title';
import ImageUser from '../../components/ImageUser';

const LoginScreen = () => {
  const {data} = useSelector((state) => state.auth);
  const msg = data ? `Welcome ${data.name}` : 'Welcome Stranger!';

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Title msg={msg} />
        <ImageUser />
      </View>
      <View style={styles.footer}>
        <FacebookLogin />
        <GoogleLogin />
      </View>
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
