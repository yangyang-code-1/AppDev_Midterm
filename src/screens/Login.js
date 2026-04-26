import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { userLogin } from '../../app/actions';
import { ROUTES } from '../../utils';

const Login = () => {
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(s => s.auth);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!emailAdd || !password) {
      Alert.alert('Incorrect Credentials', 'Please fill in all fields');
      return;
    }
    console.log('[Login] dispatch userLogin', { email: emailAdd });
    dispatch(userLogin({ email: emailAdd, password }));
  };

  return (
    <View style={styles.container}>

      <View style={styles.accentBar} />

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>you can never outrun the smoke</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <View style={styles.inputWrapper}>
        <CustomTextInput
          label={'Email Address'}
          placeholder={'Enter your email'}
          value={val => setEmailAdd(val)}
          containerStyle={styles.inputContainer}
          labelStyle={styles.inputLabel}
          textStyle={styles.inputText}
        />
        <CustomTextInput
          label={'Password'}
          placeholder={'Enter your password'}
          value={val => setPassword(val)}
          containerStyle={styles.inputContainer}
          labelStyle={styles.inputLabel}
          textStyle={styles.inputText}
        />
      </View>

      <CustomButton
        label={isLoading ? 'Entering...' : 'Sign In'}
        containerStyle={styles.button}
        textStyle={styles.buttonText}
        onPress={handleLogin}
        disabled={isLoading}
      />

      <View style={styles.registerRow}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity
          style={{ marginLeft: 5 }}
          onPress={() => navigation.navigate(ROUTES.REGISTER)}
        >
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBar} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1025',
    paddingHorizontal: 24,
  },
  accentBar: {
    width: 60,
    height: 4,
    backgroundColor: '#c084fc',
    borderRadius: 2,
    marginBottom: 14,
  },
  title: {
    color: '#e2d4f0',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  subtitle: {
    color: '#9d7fbf',
    marginBottom: 20,
    fontSize: 13,
    letterSpacing: 1,
  },
  errorText: {
    color: '#f472b6',
    marginTop: 8,
    marginBottom: 4,
  },
  inputWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#c084fc',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  inputText: {
    fontSize: 15,
    borderRadius: 4,
    color: '#e2d4f0',
    backgroundColor: '#2a1f3d',
    borderColor: '#7e3fb3',
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    width: '100%',
    backgroundColor: '#7e3fb3',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#c084fc',
  },
  buttonText: {
    color: '#f0e6ff',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  registerText: {
    color: '#7a6690',
  },
  registerLink: {
    color: '#c084fc',
    fontWeight: '600',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 30,
    width: 100,
    height: 2,
    backgroundColor: '#7e3fb3',
    borderRadius: 2,
    opacity: 0.5,
  },
});

export default Login;
