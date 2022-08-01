import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useReducer, useState } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from '../../components/Button';
import globalStyle from '../../globalStyle';
import { RouteParams } from '../../navigation/RootStack';
import { RootState } from '../../rootReducer';
import styles from './styles';
import SwipeButton from 'rn-swipe-button';
import { useAppDispatch } from '../../store';
import { clearSales } from '../../features/sales/salesSlice';
import { clearUser } from '../../features/user/userSlice';
import DeviceInfo from 'react-native-device-info'


export const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const navigation = useNavigation<any>();
  const userName = useSelector((state: RootState) => state.user.name);
  const [isEmulator, setIsEmulator] = useState(false);

  useEffect(() => {
    DeviceInfo.isEmulator().then(e => setIsEmulator(e))
  })

  const handleLogin = () => {
    navigation.navigate('Login', {});
  }
  const handleNavigateToSales = () => {
    if (userName) {
      navigation.navigate('Sales', {});
    }
  };
  const handleNavigateToReports = () => {
    if (userName) {
      navigation.navigate('Reports', {});
    }
  }
  const handleDeleteAllData = () => {
    dispatch(clearSales());
    dispatch(clearUser());
  }

  return (
    <View style={styles.root}>

      <View style={styles.header}>
        {userName ? (
          <Text style={[globalStyle.header, styles.noUserText]}>Welcome, {userName}</Text>
        ) : (
          <Text style={[globalStyle.header, styles.noUserText]}>
            You need to login first in order to use the app
          </Text>
        )}
        {isEmulator && (
          <View style={styles.emulatorNotice}>
            <Text style={styles.emulatorNoticeText}>The application is running in the emulator</Text>
          </View>
        )}
      </View>

      <View>
        <Button title="Login" variant="naked" onPress={handleLogin} />
        <Button title="Sales" variant="secondary" onPress={handleNavigateToSales} />
        <Button title="Reports" variant="primary" onPress={handleNavigateToReports} />
        <SwipeButton
          railBackgroundColor="#a493d6"
          thumbIconBackgroundColor="#FFFFFF"
          title="Slide to delete all data"
          onSwipeSuccess={handleDeleteAllData}
        />
      </View>
    </View>
  )
};
export default HomeScreen;
