// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLOR_WHITE } from '@styles/colors';

type Props = {
  isLoading: boolean,
  children?: React.Element<any>,
  color?: string,
  size?: 'large' | 'small',
};

export const Loading = ({ isLoading, children, color, size }: Props) => {
  return isLoading ? (
    <ActivityIndicator size={size || 'large'} color={color || COLOR_WHITE} />
  ) : (
    children || null
  );
};
