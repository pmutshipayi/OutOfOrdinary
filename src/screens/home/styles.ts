import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  noUserText: {
    textAlign: 'center',
    marginTop: 15
  },
  header: {
    flex: 1, 
    flexDirection: 'column-reverse',
    justifyContent: 'center'
  },
  emulatorNotice: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'red'
  },
  emulatorNoticeText: {
    color: '#fff',
    fontWeight: "600",
  }
});
export default styles;
