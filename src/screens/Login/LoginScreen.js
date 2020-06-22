import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import FacebookLogin from '../../components/FacebookLogin';
import GoogleLogin from '../../components/GoogleLogin';
import Title from '../../components/Title';
import ImageUser from '../../components/ImageUser';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../../components/Loader';

const LoginScreen = ({navigation}) => {
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
          backgroundColor="#3b5998"
          onPress={() => navigation.navigate('TabStack')}
          solid
        >
          <Text style={{color: '#F5FBFF'}}>List Movies</Text>
        </Icon.Button>
        <FacebookLogin />
      </>
    );
  };

  return (
    <View style={styles.container}>
      {loading && <Loader />}
      {!loading && (
        <>
          <View style={styles.main}>
            <Title msg={msg} color={'black'} size={20} />
            <ImageUser />
          </View>
          <View style={styles.footer}>{renderButton()}</View>
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
