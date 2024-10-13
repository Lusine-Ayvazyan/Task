import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ExploreStackParamList} from '../../navigation/ExploreStack';
import Icons from '../../../assets/svgs';
import {Colors} from '../../config/Colors';
import PrimaryButton from '../../components/PrimaryButton';
import Text from '../../components/Text';
import {openLink} from '../../config/utils';

type Props = NativeStackScreenProps<
  ExploreStackParamList,
  'HotelDetailsScreen'
>;

export const HotelDetailsScreen: React.FC<Props> = ({route}) => {
  const navigation = useNavigation<Props['navigation']>();
  const details = route.params.details;
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <TouchableOpacity onPress={goBack} style={styles.goBack}>
        <Icons.Back />
      </TouchableOpacity>
      <ScrollView style={styles.scroll}>
        <Image
          source={{uri: details.image}}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text type="title" color="gray100">
            {details.name}
          </Text>
          <Text type="subTitle" color="gray100" style={styles.overview}>
            Overview
          </Text>
          <Text type="bodyMRegular" color="gray100">
            {details.overview}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Check availability"
          onPress={() => openLink('https://zoftify.com/')}
          textType="bodyM"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 399,
  },
  buttonContainer: {
    backgroundColor: Colors.gray0,
    padding: 16,
    shadowColor: '#1F2027',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  overview: {
    marginTop: 32,
    marginBottom: 16,
  },
  goBack: {
    position: 'absolute',
    top: StatusBar.currentHeight ?? +12,
    zIndex: 1,
    left: 8,
  },
});
