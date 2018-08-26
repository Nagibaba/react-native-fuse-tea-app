import React from 'react';
// var Orientation = require('react-native').NativeModules.Orientation

import SelectFruit from './components/SelectFruit'
import SelectColor from './components/SelectColor'
import SelectTaste from './components/SelectTaste'
import Surprise from './components/Surprise'
import Register from './components/Register'
import SelectUsername from './components/SelectUsername'
import styles from './components/styles'
import Moment from 'moment';
import { 
   
  Text, 
  View,
  ImageBackground,
  Image,
  Alert,
  TouchableOpacity,
  BackHandler,
  AsyncStorage,
  NetInfo
  
   } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      username: '',
      fontFamily: 'Roboto',
      fruit: '',
      color: '',
      taste:'',
      register: false,
      name:'',
      surname:'',
      tel:'',
      email:''
    };
    this.nullState = this.nullState.bind(this)
    this.addToDB = this.addToDB.bind(this)
  }
  // componentWillMount(){
  //   Orientation.lockToLandscape()
  // }
  async componentDidMount(){
    
    await Font.loadAsync({
      'GothamProAZBold': require('./assets/fonts/GothamProAZBold.ttf'),
    });
    this.setState({fontFamily: 'GothamProAZBold'})

    BackHandler.addEventListener('hardwareBackPress', this.nullState);
  }
  nullState(){
     this.setState({
        fontFamily: 'Roboto',
        fruit: '',
        color: '',
        taste:'',
        register: false,
        name:'',
        surname:'',
        tel:'',
        email:''
      })
      return true;
  }
  _selectFruit(fruit){
    this.setState({fruit:fruit})
  }

  _selectColor(color){
    this.setState({color:color})
  }

  _selectTaste(taste){
    this.setState({taste:taste})
    
  }

  _selectUsername(username){
    this.setState({username:username})
    
  }

  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    }
    catch(exception) {
      Alert.alert(exception.message);
    }
  }

  addToDB(registerInfo){
    Object.assign(this.state, registerInfo)
    let users
    try{
      AsyncStorage.getItem('users_table').then((users_table) => {

        if(users_table) users_table = JSON.parse(users_table)
        else users_table = []
        Moment.locale('en');
        const date = Moment(new Date()).format('HH:mm:ss DD/MM/YYYY')
        const user = Object.assign({created_at: date}, this.state)
        users_table.push(user)
        NetInfo.isConnected.fetch().then(isConnected => {
          if(isConnected){
            const url = 'http://fuse.smartgroup.az/add.php?token=nagibabaisthebest1'
            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(users_table), // data can be `string` or {object}!
              headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
            .then(res => {
              return res.json()
            })
            .then(response => {
              if (response.success) {
                Alert.alert('Məlumat serverə əlavə edildi!')
                this.removeItemValue('users_table')
                this.nullState()
                
              
                
                
              } else {
                Alert.alert(response.message)
              }
            })
            .catch(error => Alert.Alert('Xəta:', error));
          } else {
            AsyncStorage.setItem('users_table', JSON.stringify(users_table), ()=>{
              users_table = []
            })
              this.nullState()
          }

        });
        
        
        

      })
    } catch(err) {
      Alert.alert('Xəta: '+err)
    }
  }

  render() {
    let page = <SelectFruit _onpress={this._selectFruit.bind(this)} fontFamily={this.state.fontFamily}/>
    if(this.state.username==''){
      page = <SelectUsername _onpress={this._selectUsername.bind(this)}  />
    }
    if(this.state.fruit!=''){
      page = <SelectColor _onpress={this._selectColor.bind(this)} fontFamily={this.state.fontFamily} />
    }
    if(this.state.color!=''){
      page = <SelectTaste _onpress={this._selectTaste.bind(this)} fontFamily={this.state.fontFamily} />
    }
    if(this.state.taste){
      page = <Surprise _onpress={this.nullState.bind(this)} onPressRegister={()=>this.setState({register: true})} fruit={this.state.fruit} fontFamily={this.state.fontFamily} />
    }

    if(this.state.register){
      page = <Register addToDB={this.addToDB} fontFamily={this.state.fontFamily} />
    }

    
    return (
      <View style={ styles.container }>
          <ImageBackground source={require('./assets/img/bgd.jpg')} style={styles.backgroundImage}>
              <View style={ styles.inner }>
                  {page}

              </View>
              <Text style={{color: 'white'}}>{this.state.username} </Text>
          </ImageBackground>
      </View>
    );
  }
}

