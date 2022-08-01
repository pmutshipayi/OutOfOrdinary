import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../const/color';
import styles from './style';

type Props = {
  variant: 'primary' | 'secondary' | 'naked',
  title: string;
  onPress?: () => void;
}

export const Button = ({ title, variant, onPress }: Props) => {
  const getBackground = () => {
    switch (variant) {
      case 'primary':
        return COLORS.primary
      case 'secondary':
        return COLORS.secondary;
      default:
        return 'transparent'
    }
  }
  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return COLORS.white;
      default:
        return COLORS.primary;
    }
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.root, { backgroundColor: getBackground() }]}>
        <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};
export default Button;
