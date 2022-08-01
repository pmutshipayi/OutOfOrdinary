import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { products } from '../../data';
import { addSale } from '../../features/sales/salesSlice';
import globalStyle from '../../globalStyle';
import { ProductModel } from '../../model/models';
import { useAppDispatch } from '../../store';
import styles from './styles';

type Basket = {
  product: ProductModel;
  qty: number;
}
const SaleScreen = () => {
  const navigation = useNavigation();
  const dispatcher = useAppDispatch();
  const [ baskets, setBaskets ] = useState<Basket[]>([]);

  const handleIncreaseQty = (productName: string) => {
    const basket = baskets.find(basket => basket.product.name === productName);
    if (basket) {
      basket.qty += 1;
      setBaskets([...baskets.filter(b => b.product.name !== productName), basket])
    } else {
      setBaskets([...baskets, { product: products.find(p => p.name === productName)!!, qty: 1 }]);
    }
  }

  const handleDecreaseQty = (productName: string) => {
    const basket = baskets.find(basket => basket.product.name === productName);
    if (basket !== undefined) {
      basket.qty -= 1;
      const copy = baskets.filter(b => b.product.name !== productName);
      if (basket.qty < 1) {
        setBaskets(copy);
      } else {
        setBaskets([...copy, basket]);
      }
    }
  }

  const getQty = (productName: string) => {
    const basket = baskets.find(basket => basket.product.name === productName);
    if (basket) {
      return basket.qty;
    }
    return 0;
  }

  const getTotalPrice = () => {
    if (baskets.length === 0) return 0;
    return baskets
          .map(basket => basket.product.price * basket.qty)
          .reduce((prev, next) => prev + next);
  }

  const handleAddToSale = () => {
    dispatcher(addSale({
      products: baskets
    }));
    navigation.goBack();
  }

  return (
    <View style={styles.root}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productView}>
            <View style={styles.productNameView}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>R{item.price}</Text>
            </View>
            <View style={styles.qtyView}>
              <Button variant="naked" title="-" onPress={() => handleDecreaseQty(item.name)} />
              <Text>{getQty(item.name)}</Text>
              <Button variant="naked" title="+" onPress={() => handleIncreaseQty(item.name)} />
            </View>
          </View>
        )}
        ListFooterComponent={(
          <View>
            <Text style={[globalStyle.header, { marginTop: 20 }]}>Total: R{getTotalPrice()}</Text>
            <Button variant="primary" title="Add to sale" onPress={handleAddToSale} />
          </View>
        )}
      />
    </View>
  )
};
export default SaleScreen;
