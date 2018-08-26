import React from 'react'
import styles from './styles'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image
} from 'react-native'

export default class SelectUsername extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      username: ''
    };
  }
  render(){
    return(
      <React.Fragment>
        <View style={styles.topText}>
          <Text style={[styles.topTextContent]}>İSTİFADƏÇİ ADI SEÇ</Text>
        </View>
        <ScrollView>
        <KeyboardAvoidingView style={styles.inputs} behavior="position" enabled>

          <View style={styles.rowM}>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputText}>USER:</Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                multiline={false}
                onChangeText={(text) => this.setState({username:text})}
                value={this.state.username}
                
              />
            </View>
          </View>


        </KeyboardAvoidingView>
        </ScrollView>

        <View style={styles.nextBtn}>
            <TouchableOpacity onPress={()=>this.props._onpress(this.state.username)}>
              <Image source={require('../assets/img/6/tesdiq.png')} style={{width: 160, height: 40, resizeMode: 'contain'}} />
            </TouchableOpacity>
            
        </View>
      </React.Fragment>
    )
  }
}