import {StyleSheet} from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    padding: widthPercentageToDP('3%'), 
    backgroundColor: '#f8f9fa',
    marginTop: heightPercentageToDP('1%'),
  },
  safeAreaContainer:{
    flex:1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('2%'),
    margin: heightPercentageToDP('1%'),
    marginTop: heightPercentageToDP('2%'),
    color:'#000'
  },
  headerSearch:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('2%'),
    color:'#1E3A8A'

  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('2%'),
  },
  searchInput: {
    padding: 15,
    paddingLeft: widthPercentageToDP('4%'),
    marginBottom: heightPercentageToDP('4%'),
    marginTop: heightPercentageToDP('2%'),
    borderRadius: 25,
    backgroundColor: '#ECECEC',
    borderColor: '#B0B0B0',
    color: "#333"
  },
  searchButton: {
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: heightPercentageToDP('1%'),
    width: '20%',
  },
  buttonText: {
    color: 'white', 
    fontWeight: 'bold', 
    margin: heightPercentageToDP('0.5%')
  },
  imageContainer: {
    alignItems: 'center', 
    marginBottom: heightPercentageToDP('2%')
  },
  image: {
    width: '100%',
    height: heightPercentageToDP('40%'),
    borderRadius: 10
  },
  loaderContainer:{
    ...StyleSheet.absoluteFillObject,
    justifyContent:'center',
    alignItems:'center',
  },
  loader: {
    zIndex: 999
  },
  infoButton: {
    backgroundColor: '#28a745',
    padding: 5,
    borderRadius: 5,
    marginTop: heightPercentageToDP('1%'),
    flexDirection: 'row',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16, 
    marginBottom: heightPercentageToDP('0.5%')
  },
  closeButton: {
    backgroundColor: '#dc3545',
    padding: heightPercentageToDP('1%'),
    borderRadius: 5,
    marginTop: heightPercentageToDP('1%'),
  },
});

export default styles;
