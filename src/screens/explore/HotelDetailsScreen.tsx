import React from 'react';
import {
  ImageBackground,
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
import {Text} from '../../components/Text';
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
      <View>
        <StatusBar barStyle={'light-content'} />
        <ImageBackground
          source={{uri: details.image}}
          style={styles.image}
          resizeMode="cover">
          <TouchableOpacity onPress={goBack}>
            <Icons.Back />
          </TouchableOpacity>
        </ImageBackground>
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
      </View>
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
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '102%',
    height: 399,
    paddingLeft: 8,
    paddingTop: StatusBar.currentHeight ?? +12,
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
});
