import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';
import { ReportScreen } from '../screens/reports';
import ReportsScreen from '../screens/reports/ReportScreen';
import { SaleScreen } from '../screens/sale';

export type RouteParams = {
  Home: {},
  Login: {},
  Sales: {},
  Reports: {},
}

const { Navigator, Screen } = createNativeStackNavigator<RouteParams>();

const RootStack = () => {
  return (
    <Navigator>
      <Screen options={{ headerShown: false  }} name="Home" component={HomeScreen} />
      <Screen name="Sales" component={SaleScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Reports" component={ReportsScreen} />
    </Navigator>
  )
};
export default RootStack;
