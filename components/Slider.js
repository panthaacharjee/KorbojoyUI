import React, { useEffect } from 'react';
import {View,Text,Image,SafeAreaView,StyleSheet} from 'react-native';

let i = 2;
let colors  = ['#34ebc9','pink','skyblue'];
const elements = ["WELCOME TO THE WORLD OF KORBOJOY","SEARCH, DISCOVERAND ENJOY", "SMART SHOPPING SMART YOU!"]
//#E5E5E5

const Slider = ({GoHome}) => {
    return(
        <SafeAreaView style={styles.sliderContainer}>
            <View style={styles.sliderImageContainer}>
                <Image source={require('../assets/images/KorboJoyLogo.png')} style={styles.sliderLogo} />
                <Image source={require('../assets/images/logoTextKorboJoy.png')}/>
            </View>
            <View style={styles.sliderTextContainer}>
                 <Text style={styles.sliderText}>{elements[i]}</Text>
                 <View style={styles.sliderDots}>
                     <Text style={styles.sliderDot}>o</Text>
                     <Text style={styles.sliderDot}>o</Text>
                     <Text style={styles.sliderDot}>o</Text>
                </View>
                {
                    i == 2 ? <Text onPress={GoHome} style={styles.sliderArrow}>---)</Text>:<Text></Text>
                }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sliderContainer:{
        flex:1,
        justifyContent:'space-between',
        width:'100%',
        backgroundColor:'white'
    },
    sliderImageContainer:{
       flex:2,
       alignItems:'center',
       justifyContent:'center'
    },
    sliderLogo:{

    },
    sliderLogoText:{

    },
    sliderTextContainer:{
        backgroundColor:`${colors[i]}`,
        flex:1,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    sliderText:{
        color:'#086266',
        fontFamily:'Bebas Neue',
        textAlign:'center',
        lineHeight:40,
        fontSize:30,
        fontStyle:'normal',
        padding:25,
        fontWeight:'bold',
    },
    sliderDots:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    sliderDot:{
        padding:5,
        color:'white'
    },
    sliderArrow:{
        position:'absolute',
        right:50,
        bottom:65,
        color:'white',
        backgroundColor:'rgba(0, 0, 0, 0.4)',
        padding:10,
        borderRadius:100
    }
});

export default Slider;