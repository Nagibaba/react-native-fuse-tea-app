import React from 'react'
import styles from './styles'
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions, 
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
const { width, height } = Dimensions.get("window");

export default class Register extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      name:'',
      surname:'',
      tel:'',
      email:''
    };
  }
  render(){
    return(
      <React.Fragment>
        <View style={styles.topText}>
          <Text style={[styles.topTextContent, {fontFamily: this.props.fontFamily}]}>ÖZÜNÜ TƏQDİM ET</Text>
        </View>
        <ScrollView>
        <KeyboardAvoidingView style={styles.inputs} behavior="position" enabled>

          <View style={styles.rowM}>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputText}>Adı:</Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                multiline={false}
                onChangeText={(text) => this.setState({name:text})}
                value={this.state.name}
                
              />
            </View>
          </View>

          <View style={styles.rowM}>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputText}>Soyadı:</Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                multiline={false}
                onChangeText={(text) => this.setState({surname:text})}
                value={this.state.surname}
                
              />
            </View>
          </View>

          <View style={styles.rowM}>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputText}>Telefon:</Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                keyboardType='numeric'
                multiline={false}
                onChangeText={(text) => this.setState({tel:text})}
                value={this.state.tel}
                
              />
            </View>
          </View>

          <View style={styles.rowM}>
            <View style={styles.inputTextWrapper}>
              <Text style={styles.inputText}>E-mail:</Text>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                keyboardType='email-address'
                multiline={false}
                onChangeText={(text) => this.setState({email:text})}
                value={this.state.email}
                
              />
            </View>
          </View>

        </KeyboardAvoidingView>
        </ScrollView>

        <View style={styles.nextBtn}>
            <TouchableOpacity onPress={()=>this.props.addToDB(this.state)}>
              <Image source={require('../assets/img/6/tesdiq.png')} style={{width: 160, height: 40, resizeMode: 'contain'}} />
            </TouchableOpacity>
            
        </View>
      </React.Fragment>
    )
  }
}