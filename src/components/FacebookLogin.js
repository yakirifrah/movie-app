import React from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginWithFacebook, logoutWithFacebook} from '../store/actions/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

const FacebookLogin = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.auth);
  const isLogin = data && data.name;
  const buttonText =
    data && data.name ? 'logout with facebook' : 'login with facebook';
  return (
    <>
      <Icon.Button
        size={20}
        name="facebook"
        backgroundColor="#3b5998"
        onPress={() =>
          isLogin
            ? dispatch(logoutWithFacebook())
            : dispatch(loginWithFacebook())
        }
        solid>
        <Text style={{color: '#F5FBFF'}}>{buttonText}</Text>
      </Icon.Button>
    </>
  );
};

export default FacebookLogin;
