export type Color =
  | 'primary05'
  | 'primary10'
  | 'primary80'
  | 'primary100'
  | 'primary120'
  | 'secondary05'
  | 'secondary10'
  | 'secondary20'
  | 'secondary100'
  | 'secondary140'
  | 'gray0'
  | 'gray05'
  | 'gray10'
  | 'gray20'
  | 'gray60'
  | 'gray70'
  | 'gray100';

export type IColor = {
  [key in Color]: string;
};

export const Colors: IColor = {
  primary05: '#FDEFD9',
  primary10: '#FCDEB3',
  primary80: '#F8B34D',
  primary100: '#F49300',
  primary120: '#E28800',
  secondary05: '#EEFAEB',
  secondary10: '#DDF6D7',
  secondary20: '#BBEFAD',
  secondary100: '#1C8E00',
  secondary140: '#186006',
  gray0: '#FFFFFF',
  gray05: 'F3F4F6',
  gray10: '#E5E7EB',
  gray20: 'D1D5DB',
  gray60: '#9CA3AF',
  gray70: '6B7280',
  gray100: '#111827',
};
