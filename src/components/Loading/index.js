// @flow

import * as React from 'react';
import { ActivityIndicator } from 'react-native';

type Props = {
  isLoading: boolean,
  children?: React.Element<any>,
  color?: string,
  size?: 'large' | 'small',
};

export const Loading = ({ isLoading, children, color, size }: Props) => {
  return isLoading ? (
    <ActivityIndicator size={size || 'large'} color={color || '#fff'} />
  ) : (
    children || null
  );
};
