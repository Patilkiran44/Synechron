import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { saveCredentials } from '../redux/actions';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

class Home extends Component {

    constructor(props) {
        super();
        this.state = {
          email:"",
          password :"",
          isDisabled : false,
        }
    }

     inputChangeHandler = () => {
      const {email,password} = this.state;
      let isValidEmail = false ;
      let isValidPassword = false ;
      isValidEmail = emailRegex.test(email);
      isValidPassword =passwordRegex.test(password);
      if(isValidPassword && isValidEmail){
        this.setState({isDisabled : true})
      }
    };
    render() {
      
        return (
          <View style={styles.container}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder={I18n.t('email')}
              placeholderTextColor="white"
              onChangeText={(email) => this.setState({email :email})}
              onChange={this.inputChangeHandler}
            /> 
          </View> 
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder={I18n.t('password')}
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password:password})}
              onChange={this.inputChangeHandler}
            /> 
          </View> 
          <TouchableOpacity style={[styles.loginBtn,{backgroundColor:!this.state.isDisabled ?"rgba(128,0,0,0.4)":"#800020"}]}  disabled={!this.state.isDisabled}        
           onPress={() => this.props.navigation.navigate('MovieList')}>
            <Text style={styles.loginText} >{I18n.t('submit')}</Text> 
          </TouchableOpacity> 
        </View> 
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#888888"
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#282828",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize :15,
    color :"white"
  },
  loginBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  loginText:{
    fontSize :20,
    color:"white",
    fontWeight: "800",  }
})




  const ActionCreators = Object.assign(
    {},
    {saveCredentials},
  );
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapDispatchToProps,null)(Home);

I18n.fallbacks = true;
 
I18n.translations = {
  en: {
    email: 'Email',
    password:"Password",
    submit :"SUBMIT"
  },
  ar: {
    email: 'بريد إلكتروني',
    password:"كلمة المرور",
    submit :"يُقدِّم"
  },
};