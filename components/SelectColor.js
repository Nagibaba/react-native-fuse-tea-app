import React from 'react'
import styles from './styles'
import Fruit from './Fruit'
import { Svg } from 'expo';
const { Use, G, Path} = Svg;
import {
  View,
  Text,
  Image,
  Dimensions
} from 'react-native'
const { width, height } = Dimensions.get("window");

export default class SelectColor extends React.Component{
  render(){
    const transform = "scale("+ height/240 +") " + "translate("+ height*1/32 +")"
    const viewBox = "0 0 "+Math.round(height*3/4)+" "+Math.round(height*3/4)
    return(
      <React.Fragment>
        <View style={styles.topText}>
          <Text style={[styles.topTextContent,  {fontFamily: this.props.fontFamily}]}>SEVDİYİNİZ RƏNGİ SEÇİN</Text>
        </View>
        <View style={{flex:3, alignItems: 'center', justifyContent: 'center', }}>
          <Svg width={Math.round(height*3/4)} height={Math.round(height*3/4)}  viewBox={viewBox} >
            <G transform={transform} >
              <G transform="rotate(0.9513165354728699 76.07505035400378,82.95242309570287) " >
               <Path fill="#ed6a03" onPress={()=>{this.props._onpress("#ed6a03")}} style={styles.colorPath} stroke="#ffffff" stroke-width="0" d="m52.105957,42.912119c13.540094,8.008544 22.83391,23.509084 23.488748,40.262357c15.195491,-9.582596 24.192393,-27.039514 23.025074,-43.84973c-1.061569,-15.33378 -11.050897,-27.011043 -23.065747,-35.747637c-12.051456,5.991156 -24.082576,25.355646 -23.444007,39.335009l-0.004067,0z" />

               <G transform="rotate(179.9437713623047 76.70769500732422,122.50618743896486) " >
                <Path fill="#9fd3c5" onPress={()=>{this.props._onpress("#9fd3c5")}} style={styles.colorPath} stroke="#ffffff" stroke-width="0" d="m53.410304,122.042513c13.540094,8.008544 22.83391,23.509084 23.488748,40.262357c15.195491,-9.582595 24.192394,-27.039514 23.025074,-43.84973c-1.061569,-15.333779 -11.050897,-27.011043 -23.065747,-35.747637c-12.051456,5.991156 -24.082576,25.355646 -23.444007,39.33501l-0.004068,0z" />
               </G>
              </G>
              <G transform="rotate(61.123626708984375 110.40651702880858,63.251884460449226) " >
               <Path fill="#fbb903" onPress={()=>{this.props._onpress("#fbb903")}} style={styles.colorPath} stroke="#ffffff" stroke-width="0" d="m87.109081,62.788212c13.540094,8.008544 22.83391,23.509084 23.488748,40.262357c15.195491,-9.582595 24.192394,-27.039514 23.025074,-43.84973c-1.061569,-15.333779 -11.050897,-27.011043 -23.065747,-35.747637c-12.051456,5.991156 -24.082576,25.355646 -23.444007,39.33501l-0.004068,0z" />
              </G>
              <G transform="rotate(241.06739807128906 41.744792938232415,102.60780334472655) " >
               <Path fill="#a3559b" onPress={()=>{this.props._onpress("#a3559b")}} style={styles.colorPath} stroke="#ffffff" stroke-width="0" d="m18.44744,102.144132c13.540094,8.008544 22.83391,23.509084 23.488748,40.262357c15.195491,-9.582595 24.192394,-27.039514 23.025074,-43.84973c-1.061569,-15.333779 -11.050897,-27.011043 -23.065747,-35.747637c-12.051456,5.991156 -24.082576,25.355646 -23.444007,39.33501l-0.004068,0z" />
              </G>
              <G transform="rotate(121.29915618896484 110.2408676147461,102.93882751464845) " >
               <Path fill="#f7e90b" onPress={()=>{this.props._onpress("#f7e90b")}} style={styles.colorPath} stroke="#ffffff" stroke-width="0" d="m86.943435,102.475149c13.540094,8.008544 22.83391,23.509084 23.488748,40.262357c15.195491,-9.582595 24.192394,-27.039514 23.025074,-43.84973c-1.061569,-15.333779 -11.050897,-27.011043 -23.065747,-35.747637c-12.051456,5.991156 -24.082576,25.355646 -23.444007,39.33501l-0.004068,0z" />
              </G>
              <G transform="rotate(301.242919921875 41.94900131225586,62.94457626342773) " >
               <Path fill="#e30511" onPress={()=>{this.props._onpress("#e30511")}} style={styles.colorPath} stroke="#ffffff" stroke-width="0" d="m18.651648,62.480902c13.540094,8.008544 22.83391,23.509084 23.488748,40.262357c15.195491,-9.582595 24.192394,-27.039514 23.025074,-43.84973c-1.061569,-15.333779 -11.050897,-27.011043 -23.065747,-35.747637c-12.051456,5.991156 -24.082576,25.355646 -23.444007,39.33501l-0.004068,0z" />
              </G>
          
            </G>
          </Svg>

           
           
        </View>
      </React.Fragment>
    )
  }
}