import React from 'react'
import styles from './styles'
import Fruit from './Fruit'
import { Svg } from 'expo';
const { Use, G, Path, Image, Defs, Pattern} = Svg;
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'


export default class SelectColor extends React.Component{
  constructor(props) {
    super(props);

  }
  render(){
    const { width, height } = Dimensions.get("window");
    const viewBox = "0 0 "+(width)+" "+(height*3/2)
    return(
      <React.Fragment>
        <View style={styles.topText}>
          <Text style={[styles.topTextContent, {fontFamily: this.props.fontFamily}]}>SEVDİYİNİZ DADI SEÇİN</Text>
        </View>
        <View style={{flex:3, alignItems: 'center', justifyContent: 'center'}}>
      
          
        <View style={[styles.row, {alignItems: 'flex-end' }]}>
          <TouchableOpacity style={{marginBottom: -15}} onPress={()=>{this.props._onpress('shirin')}} >
           <View style={[styles.taste]}>
             <Text style={styles.tasteText}>
                ŞİRİN
             </Text>
           </View>
          </TouchableOpacity>

        </View>

        <View style={[styles.row, {flex:3, alignItems: 'flex-start', alignSelf: 'flex-start' }]}>

          <View style={{flex:1, alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={()=>{this.props._onpress('meyxosh')}} >
             <View style={[styles.taste, {backgroundColor: '#127aae'}]}>
               <Text style={[styles.tasteText]}>
                  MEYXOŞ
               </Text>
             </View>
            </TouchableOpacity>
          </View>


          <View style={{flex:1 }}>
            <TouchableOpacity onPress={()=>{this.props._onpress('tursh')}} >
             <View style={[styles.taste,{backgroundColor: '#a9110c'}]}>
               <Text style={styles.tasteText}>
                  TURŞ
               </Text>
             </View>
            </TouchableOpacity>
          </View>

        </View>

           
           
        </View>
      </React.Fragment>
    )
  }
}