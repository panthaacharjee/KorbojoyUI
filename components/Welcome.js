import React from 'react';
import {View,Text,SafeAreaView,Image,StyleSheet} from 'react-native';

const Welcome = ({navigation}) =>{
    return(
        <SafeAreaView style={WelcomePageStyles.welcomeContainer}>
            <View ><Text style={WelcomePageStyles.homeButton}>H</Text></View>
            <View style={WelcomePageStyles.welcomeTextContainer}>
                <Text style={WelcomePageStyles.welcometext1}>Welcome</Text>
                <Text style={WelcomePageStyles.welcometext2}>create an account and access thousand of products</Text>
            </View>
            <Image style={WelcomePageStyles.WelcomeImage} source={require('../assets/images/welcomeImage.png')} />
            <View style={WelcomePageStyles.WelcomeButtonsContainer}>
                 <Text style={WelcomePageStyles.welcomeButton1} onPress={()=>{navigation.navigate('GoSigninSignupPage')}}>Getting Started</Text>
                 <Text style={WelcomePageStyles.welcomeButton2}>Already have account?
                   <Text style={WelcomePageStyles.welcomeButton2schild}>Log in</Text>
                 </Text>
            </View>
        </SafeAreaView>
    );
}

export default Welcome;

const WelcomePageStyles = StyleSheet.create({
      welcomeContainer:{
        flex:1,
        justifyContent:'space-between',
        width:'100%',
        backgroundColor:'white'
      },
      welcomeTextContainer:{
          flex:1,
          justifyContent:'center',
          paddingLeft:60
      },
      welcometext1:{
          color:'#000000',
          fontFamily:'Roboto',
          lineHeight:50,
          fontSize:25,
          fontWeight:'600',
          fontWeight:'bold'
      },
      welcometext2:{
        color:'#000000',
        fontFamily:'Roboto',
        lineHeight:23,
        fontSize:20,
      },
      WelcomeImage:{
            marginBottom:15
      },
      WelcomeButtonsContainer:{
          flex:1,
          backgroundColor:'pink',
          borderTopRightRadius:30,
          borderTopLeftRadius:30,
          justifyContent:'center',
          alignItems:'center'
      },
      welcomeButton1:{
          fontFamily:'Roboto',
          backgroundColor:'white',
          fontWeight:'bold',
          paddingBottom:10,
          paddingTop:10,
          paddingLeft:25,
          paddingRight:25,
          textAlign:'center',
          color:'#086266',
          lineHeight:25,
          borderRadius:10,
          fontSize:20
      },
      welcomeButton2:{
          color:'black',
          lineHeight:40,
          fontSize:16
      },
      welcomeButton2schild:{
          color:'darkgreen',
          marginLeft:5
      },
      homeButton:{
          backgroundColor:'white',
          padding:10,      
          position:'absolute',
          right:20,
          top:20,
          textAlign:'center', 
      }
})