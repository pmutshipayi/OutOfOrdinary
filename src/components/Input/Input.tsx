import React from 'react';
import { TextInput } from 'react-native';
import styles from './style';

type Props = {
  value: string;
  onTextChanged?: (text: string) => void;
}
export const Input = ({ value, onTextChanged }: Props) => {
  return (
    <TextInput style={styles.input} value={value} onChangeText={onTextChanged} />
  )
};
export default Input;
