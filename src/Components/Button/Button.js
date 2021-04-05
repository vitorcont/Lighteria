import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Botao = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.botaoContainer}>
      <Text style={styles.botaoTexto}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Botao

