import {Alert, Linking} from 'react-native';

export const openLink = async (url: string) => {
  const supported = await Linking.canOpenURL(url);
  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert('Error', "Don't know how to open URI: " + url);
  }
};
