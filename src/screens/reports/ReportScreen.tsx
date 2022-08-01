import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import globalStyle from '../../globalStyle';
import { SaleModel } from '../../model/models';
import { RootState } from '../../rootReducer';
import styles from './styles';

const ReportsScreen = () => {
  const sales = useSelector((state: RootState) => state.sales);
  const getPrice = (sale: SaleModel) => {
    if (sale.products.length === 0) return 0;
    return sale.products
      .map(product => product.product.price * product.qty)
      .reduce((prev, next) => prev + next);
  }

  const getTotal = () => {
    if (sales.length === 0) return 0;
    return sales.flatMap(e => e.products)
      .map(product => product.product.price * product.qty)
      .reduce((prev, next) => prev + next);
  }

  return (
    <View style={styles.root}>
      <FlatList
        data={sales}
        ListFooterComponent={(
          <View style={{ marginTop: 25 }}>
            <Text style={globalStyle.header}>Total : {getTotal()}</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View style={styles.saleView}>
            <Text>#{index}</Text>
            <Text>R {getPrice(item)}</Text>
          </View>
        )}
      />
    </View>
  )
};
export default ReportsScreen;