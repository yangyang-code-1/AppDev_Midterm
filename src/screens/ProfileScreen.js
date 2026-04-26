import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG } from '../utils';
import { userLoginReset } from '../app/actions';
import { useDispatch } from 'react-redux';

const ProfileScreen = () => {

  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 3,
      }}
    >
      <Image
        source={{
          uri: IMG.LOGO,
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={() => dispatch(userLoginReset())}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>

  );
};

export default ProfileScreen;
