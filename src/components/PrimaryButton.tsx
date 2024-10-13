import React, {memo} from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {Colors} from '../config/Colors';
import Text, {TextType} from './Text';

interface IPrimaryButtonProps {
  title: string;
  onPress: () => void;
  textType: TextType;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  textType,
}) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text type={textType} color="gray0" style={textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary100,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(PrimaryButton);
