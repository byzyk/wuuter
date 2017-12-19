// @flow

import React from 'react';
import { Text } from 'react-native';
import { COLOR_PRIMARY } from '@styles/colors';

type Props = {
  name: string,
};

export const ProfileName = ({ name }: Props) => (
  <Text style={style}>{name ? name.toUpperCase() : ''}</Text>
);

const style = {
  fontSize: 24,
  fontWeight: '700',
  color: COLOR_PRIMARY,
  textAlign: 'center',
};
