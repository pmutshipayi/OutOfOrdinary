import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    marginTop: 20,
  },
  productView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center'
  },
  productNameView: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  productName: {
    fontSize: 15,
    fontWeight: "600"
  },
  price: {
    marginLeft: 15
  },
  qtyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
export default styles;
