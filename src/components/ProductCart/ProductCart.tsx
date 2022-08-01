import React from 'react';
import { Text, View } from 'react-native';
import { products } from '../../data';
import { ProductModel } from '../../model/models';
import styles from './style';

type Props = {
  product: ProductModel
}

export const ProductCart = ({ product }: Props) => {
  return (
    <View style={styles.root}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text>R {product.price}</Text>
    </View>
  )
};
export default ProductCart;
