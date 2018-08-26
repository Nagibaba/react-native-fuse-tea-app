import React from 'react'
import styles from './styles'
import {
  View,
  Text,
  Image,
  Dimensions,
  Alert,
  TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get("window");


export default class SelectFruit extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {};
  }



  render(){
    let fruit, hashtag
    switch(this.props.fruit){
      case 'armud':
        fruit = <Image source={require('../assets/img/5/dushes.png')} style={{width: width/2, height: height-50,resizeMode: 'contain'}}/>
        hashtag = <Image source={require('../assets/img/5/hashtag/dushes.png')} style={{width: width/2, height: height/2,resizeMode: 'contain',alignSelf: 'flex-start'}}/>
        break;
      case 'erik':
        fruit = <Image source={require('../assets/img/5/shaftali.png')} style={{width: width/2, height: height-50,resizeMode: 'contain'}}/>
        hashtag = <Image source={require('../assets/img/5/hashtag/shaftali.png')} style={{width: width/2, height: height/2,resizeMode: 'contain',alignSelf: 'flex-start'}}/>
        break;
      case 'qarpiz':
        fruit = <Image source={require('../assets/img/5/qarpiz.png')} style={{width: width/2, height: height-50,resizeMode: 'contain'}}/>
        hashtag = <Image source={require('../assets/img/5/hashtag/qarpiz.png')} style={{width: width/2, height: height/2,resizeMode: 'contain',alignSelf: 'flex-start'}}/>
        break;
      case 'limon':
        fruit = <Image source={require('../assets/img/5/limon.png')} style={{width: width/2, height: height-50,resizeMode: 'contain'}}/>
        hashtag = <Image source={require('../assets/img/5/hashtag/limon.png')} style={{width: width/2, height: height/2,resizeMode: 'contain',alignSelf: 'flex-start'}}/>
        break;
      case 'mango':
        fruit = <Image source={require('../assets/img/5/mango.png')} style={{width: width/2, height: height-50,resizeMode: 'contain'}}/>
        hashtag = <Image source={require('../assets/img/5/hashtag/mango.png')} style={{width: width/2, height: height/2,resizeMode: 'contain',alignSelf: 'flex-start'}}/>
        break;
      case 'ananas':
        fruit = <Image source={require('../assets/img/5/ananas.png')} style={{width: width/2, height: height-50,resizeMode: 'contain'}}/>
        hashtag = <Image source={require('../assets/img/5/hashtag/ananas.png')} style={{width: width/2, height: height/2,resizeMode: 'contain',alignSelf: 'flex-start'}}/>
        break;
      default:
        fruit = <Image source={require('../assets/img/5/ananas.png')} style={{width: width/2, height: height-50,resizeMode: 'contain'}}/>
        hashtag = <Image source={require('../assets/img/5/hashtag/ananas.png')} style={{width: width/2, height: height/2,resizeMode: 'contain',alignSelf: 'flex-start'}}/>
    }
    
    return(
      <React.Fragment>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.props._onpress}>
          <View style={{flex: 1,  justifyContent: 'center'}}>
            {fruit}
          </View>
        </TouchableOpacity>

          <View style={{flex: 1, justifyContent: 'flex-start' }}>

            <View style={{flex: 4, justifyContent: 'center', alignSelf: 'flex-start' }}>
              {hashtag}
            </View>
            <View style={styles.nextBtn}>
                <TouchableOpacity onPress={this.props.onPressRegister}>
                  <Image source={require('../assets/img/5/DAVAMET.png')} style={{width: 160, height: 40, resizeMode: 'contain'}} />
                </TouchableOpacity>
                
            </View>

          </View>
        </View>

      </React.Fragment>
    )
  }
}