import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',    
  },
  body: {
    flex: 3,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',    
    marginBottom: 100,
  
  },
  textUser:{
    fontSize: 20,  
    color: '#696b67',
    fontWeight: 'bold',               
},
  buttonLanguage: {
    backgroundColor: '#17344f',
    borderColor: 'black',
    margin: 5,
    width: '30%',
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCategory: {
    backgroundColor: '#17344f',
    borderColor: 'white',
    margin: 5,
    width: '30%',
    padding: 10,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonObject: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    margin: 5,
    width: '30%',
    padding: 5,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  exitSection: {
    width: '90%',
    alignItems: 'center',
    
  },
  exitText: {
    color: 'white',
    fontSize: 18,
    width: '100%',
    margin: 550,
  },
  exitButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    margin: 5,
    padding: 10,
    width: '30%',
    borderRadius: 0,
    borderWidth: 2,
    alignItems: 'center',
  },
  buttonImageIconStyle: {
    padding: 5,
    margin: 5,
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  buttonImageIconStyleL: {
    padding: 5,
    margin: 5,
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  buttonImageIcon: {    
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  faIcon: {
    color: 'white',
  }
});



