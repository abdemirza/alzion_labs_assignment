import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/configureStore';
import HomeScreen from './src/screens/HomeScreen';
// import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      {/* <NavigationContainer> */}
      <HomeScreen />
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default App;
