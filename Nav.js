import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SignIn from './screens/SignIn';
import Funds from './Src/ProfilePages/Funds';
import Tabs from './navigation/tabs';
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
          headerShown: false,
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
        <Stack.Screen name="MainLayout" component={Tabs} />

        <Stack.Screen
          Options={{
            headerShown: true,
          }}
          name="Funds"
          component={Funds}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
