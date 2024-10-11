import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src';

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Main />
    </>
  );
};

export default App;
