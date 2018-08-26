import React from 'react'
import styles from './styles'
import Fruit from './Fruit'
import {
  View,
  Text,
  Image,
} from 'react-native'

export default class SelectFruit extends React.Component{
  render(){
    return(
      <React.Fragment>
        <View style={styles.topText}>
          <Text style={[styles.topTextContent, {fontFamily: this.props.fontFamily}]}>SEVDİYİNİZ MEYVƏNİ SEÇİN</Text>
        </View>
        <View style={styles.row}>
          <Fruit source={require('../assets/img/2/armud.png')} _onPress={()=>this.props._onpress('armud')}/>
          <Fruit source={require('../assets/img/2/erik.png')} _onPress={()=>this.props._onpress('erik')}/>
          <Fruit source={require('../assets/img/2/mango.png')} _onPress={()=>this.props._onpress('mango')}/>

        </View>

        <View style={styles.row}>
          
          <Fruit source={require('../assets/img/2/ananas.png')} _onPress={()=>this.props._onpress('ananas')}/>
          <Fruit source={require('../assets/img/2/qarpiz.png')} _onPress={()=>this.props._onpress('qarpiz')}/>
          <Fruit source={require('../assets/img/2/limon.png')} _onPress={()=>this.props._onpress('limon')}/>
          
        </View>
      </React.Fragment>
    )
  }
}