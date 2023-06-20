import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './Src/redux/store';
import Nav from './Nav';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Provider store={store}>
      <Nav />
      <Toast />
    </Provider>
  </GestureHandlerRootView>
  );
};

export default App;
