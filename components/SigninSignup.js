import React from 'react';
import {SafeAreaView,View,Text,StyleSheet,TextInput,Button} from 'react-native';
import { useState } from 'react';

const SinginSignup = ({navigation})  =>{
    let [loginOrSignup,setloginOrSignup] = useState('login');
    const swapsignup = () =>{
        setloginOrSignup('signup')
    }
    const swaplogin = () =>{
        setloginOrSignup('login');
    }
    return(
        <SafeAreaView style={SinginSignupStyles.SinginSignupContainer}>
            <View style={SinginSignupStyles.SinginSignupWelcomeText}>
                <Text style={SinginSignupStyles.welcomeText1}>Log In Now</Text>
                <Text style={SinginSignupStyles.welcomeText2}  >Please log in to continue using our app</Text>
            </View>
            <View style={SinginSignupStyles.SinginSignupSwitchButton}>
                <Text style={loginOrSignup==='login'?SinginSignupStyles.buttontab:SinginSignupStyles.notSelectedButtonTab} onPress={swaplogin}>Login</Text>
                <Text style={loginOrSignup==='signup'?SinginSignupStyles.buttontab2:SinginSignupStyles.notSelectedButtonTab} onPress={swapsignup}>Sign up</Text>
            </View>
            <View style={ loginOrSignup==='login'?SinginSignupStyles.SinginSignupInputFields :SinginSignupStyles.SinginSignupInputFields2}>
                {
                    loginOrSignup=='login'?                
                    <View style={SinginSignupStyles.inputContainer}>
                        <TextInput style={SinginSignupStyles.inputfield} placeholder='your email address'/>
                        <TextInput style={SinginSignupStyles.inputfield} placeholder='password'/>
                        <Text style={SinginSignupStyles.button} onPress={()=>{navigation.navigate('GoHomePage')}}>Login</Text>
                        <Text style={SinginSignupStyles.buttonBelowText}>Don't have and accout? Sign Up</Text>
                    </View>
                    :
                    <View style={SinginSignupStyles.inputContainer}>
                        <TextInput style={SinginSignupStyles.inputfield} placeholder='your name'/>
                        <TextInput style={SinginSignupStyles.inputfield} placeholder='your email address'/>
                        <TextInput style={SinginSignupStyles.inputfield} placeholder='password'/>
                        <Text style={SinginSignupStyles.button} onPress={()=>{navigation.navigate('GoHomePage')}}>Signup</Text>
                        <Text style={SinginSignupStyles.buttonBelowText}>Already have an account? Log in</Text>
                    </View>
                }  
                           
            </View>
        </SafeAreaView>
    );
}

export default SinginSignup;

const SinginSignupStyles = StyleSheet.create({
         SinginSignupContainer:{
            flex:1,
            justifyContent:'space-between',
            width:'100%',
            backgroundColor:'white'
         },
         SinginSignupWelcomeText:{
            flex:0.5,
            justifyContent:'center',
            paddingLeft:50
         },
         welcomeText1:{
            color:'black',
            fontFamily:'Roboto',
            fontStyle:'normal',
            fontWeight:'bold',
            fontSize:25
         },
         welcomeText2:{
            color:'black',
            fontFamily:'Roboto',
            fontStyle:'normal',
            fontSize:15
         },
         SinginSignupSwitchButton:{
             flexDirection:'row',
             alignItems:'center',
             justifyContent:'space-around'
         },
         buttontab:{
            backgroundColor:'#B2F9FC',
            width:'20%',
            padding:10,
            textAlign:'center',
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            color:'black',
            fontWeight:'bold'
         },
         buttontab2:{
            backgroundColor:'#9AF0A7',
            width:'20%',
            padding:10,
            textAlign:'center',
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            color:'black',
            fontWeight:'bold'
         },
         notSelectedButtonTab:{
            width:'20%',
            padding:10,
            textAlign:'center',
            borderTopLeftRadius:15,
            borderTopRightRadius:15,
            color:'black',
            fontWeight:'bold'
         },
         SinginSignupInputFields:{
             flex:1,
             justifyContent:'center',
             alignItems:'center',
             backgroundColor:'#B2F9FC',
             borderTopLeftRadius:45,
             borderTopRightRadius:45,
         },
         SinginSignupInputFields2:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#9AF0A7',
            borderTopLeftRadius:45,
            borderTopRightRadius:45,
         },
         inputContainer:{
            justifyContent:'center',
            flex:1,
            width:'100%',
            alignItems:'center'
         },
         inputfield:{
             backgroundColor:'white',
             marginTop:20,
             width:'80%',
             borderRadius:10,
             paddingLeft:10
         },
         button:{
             backgroundColor:'#086266',
             width:'30%',
             textAlign:'center',
             paddingLeft:5,
             paddingRight:5,
             paddingTop:10,
             paddingBottom:10,
             marginTop:45,
             borderRadius:10,
             color:'white'
         },
         buttonBelowText:{
             color:'black',
             
         }
})