import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import SignIn from './screens/SignIn';
import Funds from './Src/ProfilePages/Funds';
import Tabs from './navigation/tabs';
import UserProfile from './Src/ProfilePages/Userprofile';
import Setting from './Src/ProfilePages/Setting';
import BuySrceen from './Src/BuySrceens/BuySrceen';
import SearchData from './Src/SearchData';
import LoginScreen from './Src/LoginScreen';
import RegisterScreen from './Src/RegisterScreen';
import SellScreen from './Src/BuySrceens/SellScreen';
import {Home} from './screens';
import EmailVarification from './Src/BuySrceens/EmailVarification';
import Email2 from './Src/BuySrceens/Email2';
import Mobile from './Src/BuySrceens/Mobile';
import Mobile2 from './Src/BuySrceens/Mobile2';
import Document from './Src/BuySrceens/Document';
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
        initialRouteName="Login" // Set initial route to Login
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: 'Register',
          }}
        />
        <Stack.Screen
          name="MainLayout"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="Funds"
          component={Funds}
        />
        <Stack.Screen
          options={{title: 'Profile', headerShown: false}}
          name="UserProfile"
          component={UserProfile}
        />
        <Stack.Screen name="SearchData" component={SearchData} />
        <Stack.Screen
          options={{title: 'Setting', headerShown: false}}
          name="Setting"
          component={Setting}
        />
        <Stack.Screen
          options={{title: 'BuyScreen', headerShown: false}}
          name="BuyScreen"
          component={BuySrceen}
        />

        <Stack.Screen
          options={{title: 'SellScreen', headerShown: false}}
          name="SellScreen"
          component={SellScreen}
        />
     

         <Stack.Screen
<<<<<<< HEAD
          options={{ title: 'button', headerShown: true }}
          name="Button1"
          component={Button1}
=======
          options={{ title: 'EmailVarification', headerShown: false }}
          name="email"
          component={EmailVarification}
>>>>>>> 3fb78a811219d9ab3acf132167196dad38e15cb2
        />
        <Stack.Screen
          options={{ title: 'Email2', headerShown: true }}
          name="Email2"
          component={Email2}
        />
        <Stack.Screen
          options={{ title: 'Mobile', headerShown: false }}
          name="Mobile"
          component={Mobile}
        />
        <Stack.Screen
          options={{ title: 'Mobile2', headerShown: false }}
          name="Mobile2"
          component={Mobile2}
        /> 
        <Stack.Screen
          options={{ title: 'Document', headerShown: false }}
          name="Document"
          component={Document}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;
