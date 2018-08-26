import React from 'react'
import styles from './styles'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

export default class Fruit extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	
	render(){
		return(
			<View style={styles.col3} >
				<TouchableOpacity onPress={this.props._onPress}>
		            <Image 
		              source={this.props.source} 
		              style={styles.fruit}
		              />
              	</TouchableOpacity>
          	</View>
        )
	}
}