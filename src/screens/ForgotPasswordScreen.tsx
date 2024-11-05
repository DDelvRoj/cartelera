import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigation';

type ForgotPasswordScreenProp = StackNavigationProp<RootStackParams, 'ForgotPasswordScreen'>;

export const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation<ForgotPasswordScreenProp>();

  const handlePasswordReset = () => {
    if (email) {
      Alert.alert("Solicitud enviada", "Si el correo es válido, recibirás un enlace para restablecer tu contraseña.");
      navigation.goBack();
    } else {
      Alert.alert("Error", "Por favor, ingresa tu correo electrónico.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Ingresa tu correo electrónico</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Recuperar Contraseña" onPress={handlePasswordReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black'
  },
  label: {
    marginBottom: 10,
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
});
