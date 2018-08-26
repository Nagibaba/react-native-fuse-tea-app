import {StyleSheet,StatusBar,Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
        flex: 1,
        
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        alignSelf: 'stretch',

    },
    topText:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      // backgroundColor: 'blue',
    },
    topTextContent:{

      alignSelf: 'stretch',
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 34,
      // backgroundColor: 'green',
    },
    row:{
      flex: 2,
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-around', 
      alignSelf: 'stretch',
      // backgroundColor: 'red',
      width: '100%'

    },
    rowM:{
      flex: 2,
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-around', 
      marginBottom: 10,
      alignSelf: 'stretch',
      // backgroundColor: 'red',
      width: '100%'

    },
    col3:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    fruit:{
      width: height*1/3,
      height: height*1/3,
      resizeMode: 'contain'
    },
    colorPath:{
    },
    taste:{
      width: height*1/3,
      height: height*1/3,
      backgroundColor: '#e7a306',
      borderRadius: height*1/3,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      borderWidth: 4,
      borderColor: '#ffffff'
    },
    tasteText:{
      width: '100%',
      alignSelf: 'center',
      overflow: 'visible',
      textAlign: 'center', 
      color: '#ffffff',
      fontWeight: 'bold'
    },
    bottleImg:{
      width: width/2,
      height: height
    },
    nextBtn:{
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    inputs:{
      flex: 6,
      width: width*3/4, 
      alignSelf: 'center',
    },
    inputTextWrapper:{
      flex: 1, 
      flexDirection: 'row', 
    },
    inputText:{
      flex: 1, 
      textAlign: 'right', 
      color: '#ffffff', 
      fontSize: 28, 
      fontWeight: 'bold'
    },
    inputWrapper:{
      flex: 3, 
      flexDirection: 'row',
    },
    input:{
      height: 40, 
      flex: 1,  
      backgroundColor: '#ffffff', 
      borderRadius: 2, 
      fontSize: 28, 
      fontWeight: 'bold', 
      paddingLeft: 5, 
      marginLeft: 5
    }
});
