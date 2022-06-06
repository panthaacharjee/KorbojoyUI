import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

const Checkout = ({navigation}) =>{
    return(
        <View style={{flex:1,padding:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text onPress={()=>{navigation.navigate('GoCartPage')}}>(--</Text>
                <Text>Checkout</Text>
                <Text>X</Text>
            </View>
            <View style={{flex:0.5}}>
                <Text style={{textAlign:'center'}}>Map</Text>
                
            </View>
            <View style={{padding:15,flex:0.5}} >
                <Text>Payment method</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',width:'100%'}}>
                    <Image style={{}} source={require('../assets/images/BkashLogo.png')}/>
                    <Image style={{}} source={require('../assets/images/RocketLogo.png')}/>
                    <Image source={require('../assets/images/NagadLogo.png')}/>
                    <Image source={require('../assets/images/bankCard.png')}/>
                    <Image source={require('../assets/images/BkashLogo.png')}/>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingRight:10}}>
                    <Text>Add payment method</Text>
                    <Text>+</Text>
                </View>
            </View>
            <View style={{backgroundColor:'whitesmoke',flex:0.5,borderTopLeftRadius:15,borderTopRightRadius:15,justifyContent:'center',paddingLeft:50,paddingRight:50}}>
                <Text style={{color:'black',lineHeight:25,fontWeight:'400',fontSize:18}}>3 items in cart</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'gray',borderBottomWidth:0.5,padding:1}}>
                    <Text style={{color:'black'}}>Sub Total</Text>
                    <Text style={{color:'black'}}>$ 250.00</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'gray',borderBottomWidth:0.5,padding:1}}>
                     <Text style={{color:'black'}}>Shipping</Text>
                     <Text style={{color:'black'}}>$ 5</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'gray',borderBottomWidth:0.5,padding:1}}>
                     <Text style={{color:'black'}}>Total</Text>
                     <Text style={{color:'black'}}>$ 255.00</Text>
                </View>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center',padding:15,backgroundColor:'skyblue',borderRadius:10,marginTop:5}}>
                    <Text style={{color:'white'}} onPress={()=>{navigation.navigate('GoCheckoutPage')}}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Checkout;