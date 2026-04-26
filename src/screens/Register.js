import { Text, TouchableOpacity, View } from 'react-native';
import { ROUTES } from '../../utils';
import navigations from '../../navigations';

const Register = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Register</Text>
    

    <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => navigations.navigate(ROUTES.LOGIN)}
            >
              <Text style={{ color: 'blue', fontWeight: '500' }}>Go back</Text>
    </TouchableOpacity>
            </View>
  );
  
  
};

export default Register;
