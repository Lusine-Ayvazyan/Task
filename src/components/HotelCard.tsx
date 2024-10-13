import React, {memo} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../config/Colors';
import {IHotel} from '../models/hotel';
import Icons from '../../assets/svgs';
import Text from './Text';
import PrimaryButton from './PrimaryButton';

interface IHotelCard extends IHotel {
  onPressCard: () => void;
  onPressView: () => void;
  style?: ViewStyle;
}

const HotelCard: React.FC<IHotelCard> = ({
  image,
  distance,
  rating,
  name,
  priceCategory,
  onPressCard,
  onPressView,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPressCard}>
        <Image source={{uri: image}} resizeMode="cover" style={styles.image} />
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.rowContent}>
            <Icons.Route />
            <Text type="bodyS" color="gray100" style={styles.distance}>
              {distance} mins walking
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Icons.Stars />
            <Text type="bodyS" color="primary120">
              {rating}
            </Text>
          </View>
        </View>
        <Text
          type="bodyM"
          color="gray100"
          style={styles.name}
          numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.rowContainer}>
          <View>
            <View style={styles.priceContainer}>
              <Text type="bodyS" color="secondary100">
                {priceCategory}
              </Text>
              <Text type="bodyS" color="secondary20">
                {priceCategory}
              </Text>
            </View>
            <Image
              source={require('../../assets/images/booking.png')}
              resizeMode="cover"
              style={styles.booking}
            />
          </View>
          <PrimaryButton
            title="View prices"
            onPress={onPressView}
            buttonStyle={{}}
            textType="bodyS"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray0,
    borderColor: Colors.gray10,
    borderWidth: 1,
    borderRadius: 16,
  },
  image: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    width: '100%',
    height: 245,
  },
  bottomContainer: {
    padding: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  ratingContainer: {
    gap: 4,
    flexDirection: 'row',
    backgroundColor: Colors.primary05,
    padding: 4,
    borderRadius: 6,
  },
  priceContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    backgroundColor: Colors.secondary10,
    flexDirection: 'row',
    maxWidth: '60%',
  },
  booking: {
    width: 75,
    height: 12,
    marginTop: 8,
  },
  name: {
    marginTop: 8,
    marginBottom: 16,
  },
  distance: {
    marginLeft: 4,
  },
  rowContent: {
    flexDirection: 'row',
  },
});

export default memo(HotelCard);
