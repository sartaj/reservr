/* @flow */

import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

import type { ReusableHOCProps } from '../types'

const TypographyStyles = StyleSheet.create({
  h1: {
    fontSize: 32
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 19
  },
  h4: {
    fontSize: 14,
    color: 'rgb(255,255,255)',
    fontWeight: '700',
    marginBottom: 5
  },
  p: {
    fontSize: 16
  }
})

export const Text = {
  h1: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[TypographyStyles.h1, ...style]}>{children}</RNText>,
  h2: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[TypographyStyles.h2, ...style]}>{children}</RNText>,
  h3: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[TypographyStyles.h3, ...style]}>{children}</RNText>,
  h4: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[TypographyStyles.h4, ...style]}>{children.toUpperCase()}</RNText>,
  p: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[TypographyStyles.p, ...style]}>{children}</RNText>,
}