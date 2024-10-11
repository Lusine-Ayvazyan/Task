import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {hotelList} from '../../mockData/hotel';
import HotelCard from '../../components/HotelCard';
import {IHotel} from '../../models/hotel';
import {Colors} from '../../config/Colors';
import {ExploreStackParamList} from '../../navigation/ExploreStack';
import {openLink} from '../../config/utils';

type Props = NativeStackScreenProps<ExploreStackParamList, 'HotelListScreen'>;

export const HotelListScreen: React.FC = () => {
  const navigation = useNavigation<Props['navigation']>();
  const navigateDetails = (details: IHotel) => {
    navigation.navigate('HotelDetailsScreen', {details});
  };
  const renderItem = ({item}: {item: IHotel}) => (
    <HotelCard
      {...item}
      onPressCard={() => navigateDetails(item)}
      onPressView={() => openLink('https://zoftify.com/')}
      style={styles.hotelCard}
    />
  );
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <FlatList
        data={hotelList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray0,
    paddingTop: StatusBar.currentHeight ?? +8,
  },
  hotelCard: {
    marginBottom: 12,
    marginHorizontal: 16,
  },
});
