import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HotelListScreen} from '../screens/explore/HotelListScreen';
import {HotelDetailsScreen} from '../screens/explore/HotelDetailsScreen';
import {IHotel} from '../models/hotel';

export type ExploreStackParamList = {
  HotelListScreen: undefined;
  HotelDetailsScreen: {details: IHotel};
};

const Stack = createStackNavigator<ExploreStackParamList>();

export const ExploreStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="HotelListScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HotelListScreen" component={HotelListScreen} />
      <Stack.Screen name="HotelDetailsScreen" component={HotelDetailsScreen} />
    </Stack.Navigator>
  );
};
