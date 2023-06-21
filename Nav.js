import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './screens/SignIn';
import Funds from './Src/ProfilePages/Funds';
import Tabs from './navigation/tabs';
import UserProfile from "./Src/ProfilePages/Userprofile"
import Setting from "./Src/ProfilePages/Setting";
import BuySrceen from "./Src/BuySrceens/BuySrceen";

const Stack = createStackNavigator();
const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
        }}
        initialRouteName="SignIn" // Set initial route to SignIn
      >
        {/* <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: 'Sign In'
                    }}
                /> */}
        <Stack.Screen name="MainLayout" component={Tabs}
          options={{ headerShown: false, }} />

        <Stack.Screen
          Options={{
            headerShown:"true",
          }}
          name="Funds"
          component={Funds}
        />
        <Stack.Screen
          Options={{ title:'profile',
            headerShown:'false'}}
          name="UserProfile"
          component={UserProfile}
        />
         <Stack.Screen
          Options={{ title:'Setting',
            headerShown:'false'}}
          name="Setting"
          component={Setting}
        />
         <Stack.Screen
          Options={{ title:'Setting',
            headerShown:'false'}}
          name="BuySrceen"
          component={BuySrceen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
