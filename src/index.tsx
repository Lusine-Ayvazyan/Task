import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './navigation/TabNavigation';

const Main = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default Main;
