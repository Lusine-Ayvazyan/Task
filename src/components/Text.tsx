import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle as RNTextStyle,
} from 'react-native';
import {Color, Colors} from '../config/Colors';

export type TextType =
  | 'little'
  | 'bodyS'
  | 'bodyM'
  | 'bodyMRegular'
  | 'subTitle'
  | 'title';

export interface ITextProps extends RNTextProps {
  type?: TextType;
  color?: Color;
  bold?: boolean;
  normal?: boolean;
  centered?: boolean;
}

export const FontFamily = {
  Poppins: 'Poppins',
};

const FontWeightName: {[key: string]: string} = {
  '400': 'Regular',
  '500': 'Medium',
  '600': 'Bold',
  '700': 'Bold',
};

export const providePlatformTextStyle = (styles: StyleProp<RNTextStyle>) => {
  const flatten = StyleSheet.flatten(styles);

  if (
    flatten.fontFamily &&
    !Object.values(FontFamily).includes(flatten.fontFamily)
  ) {
    throw new Error(
      `Unknown font family provided. Provided: ${
        flatten.fontFamily
      }, available: [${Object.values(FontFamily)}]`,
    );
  }

  if (
    flatten.fontWeight &&
    flatten.fontWeight !== 'bold' &&
    flatten.fontWeight !== 'normal'
  ) {
    if (!(flatten.fontWeight in FontWeightName)) {
      throw new Error(
        `Unknown font weight provided. Provided: ${
          flatten.fontWeight
        }, available: [${Object.keys(FontWeightName)}]`,
      );
    }
    flatten.fontFamily = `${flatten.fontFamily}-${
      FontWeightName[flatten.fontWeight]
    }`;
    delete flatten.fontWeight;
  } else {
    flatten.fontFamily = `${flatten.fontFamily}-${
      FontWeightName[flatten.fontWeight === 'normal' ? 400 : 700]
    }`;
  }
  return flatten;
};

const Text: React.FC<ITextProps> = ({
  type = 'bodyS',
  color = 'gray100',
  style,
  bold,
  normal,
  centered,
  children,
  ...rest
}) => {
  const platformStyle = providePlatformTextStyle([
    TextStyle[type],
    {color: Colors[color]},
    bold && TextStyle.bold,
    normal && TextStyle.normal,
    centered && TextStyle.centered,
    style,
  ]);
  return (
    <RNText style={[style, platformStyle]} {...rest}>
      {children}
    </RNText>
  );
};

export const TextStyle = StyleSheet.create({
  centered: {
    textAlign: 'center',
  },
  normal: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  little: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16,
    fontFamily: FontFamily.Poppins,
  },
  bodyS: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,
    fontFamily: FontFamily.Poppins,
  },
  bodyM: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
    fontFamily: FontFamily.Poppins,
  },
  bodyMRegular: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    fontFamily: FontFamily.Poppins,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
    fontFamily: FontFamily.Poppins,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    lineHeight: 32,
    fontFamily: FontFamily.Poppins,
  },
});
export default Text;
