// Login.js
import React from 'react';
import { View } from 'react-native';
import { MainAppbar } from '../components/MainAppbar';
import { TextInput, Button } from 'react-native-paper';

const Login = () => {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = () => {
    console.log('Logging in with:', formData);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <MainAppbar title="Login" />
      <TextInput
        label="Username"
        value={formData.username}
        onChangeText={(text) => handleInputChange('username', text)}
        style={{ marginVertical: 10 }}
      />
      <TextInput
        label="Password"
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
        secureTextEntry
        style={{ marginVertical: 10 }}
      />
      <Button mode="contained" onPress={handleLogin} style={{ marginTop: 20 }}>
        Login
      </Button>
    </View>
  );
};

export default Login;
