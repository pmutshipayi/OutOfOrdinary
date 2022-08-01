import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { setUser } from '../../features/user/userSlice';
import globalStyle from '../../globalStyle';
import { RootState } from '../../rootReducer';
import { useAppDispatch } from '../../store';
import styles from './styles';

export const LoginScreen = () => {
  const navigate = useNavigation();
  const userName = useSelector((state: RootState) => state.user.name);
  const dispatch = useAppDispatch();
  const [name, setName] = useState(userName);
  const handleSave = () => {
    dispatch(setUser(name))
    navigate.goBack();
  };

  return (
    <View style={styles.root}>
      <Input value={name} onTextChanged={(text) => setName(text)} />
      <Button title="Save" variant="primary" onPress={handleSave} />
    </View>
  )
};
export default LoginScreen;
