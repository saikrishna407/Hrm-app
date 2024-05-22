import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmpLogin from './pro/main/empLogin';
import CompanyLogin from './pro/main/companyLogin';
import TabsInfo from './pro/tabComponents/tabsInfo';
import Page1 from './pro/Pages/page1';
import Page2 from './pro/Pages/page2';
import Page3 from './pro/Pages/page3';
import Page4 from './pro/Pages/page4';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="EmL">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmL" component={EmpLogin}   />
        <Stack.Screen name="CpL" component={CompanyLogin} />
        <Stack.Screen name="TabsDetails" component={TabsInfo} />
        <Stack.Screen name="Pages1" component={Page1} />
        <Stack.Screen name="Pages2" component={Page2} />
        <Stack.Screen name="Pages3" component={Page3} />
        <Stack.Screen name="Pages4" component={Page4} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
