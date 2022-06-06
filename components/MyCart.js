import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {View,Text,Image,Button,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListViewProduct from './HelperComponents/LIstViewProduct';
import { useContext } from 'react';
import { ShoppinCartContext } from '../StateMagager/ShoppingCartContext';

const MyCart = ({navigation}) =>{
    
    //let [CartItems,SetCartItems] = useContext(ShoppinCartContext);

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
                <Text onPress={()=>{navigation.navigate('GoHomePage')}} style={{color:'black'}}>(--</Text>
                <Text style={{color:'black'}}>My Cart</Text>
                <Text style={{color:'black'}}>X</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1,padding:5}}>
                {/*
                    CartItems.map(Item=>(
                        <ListViewProduct product={Item} />
                    ))
                 */
                }
            </ScrollView>

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
                <TouchableOpacity onPress={()=>{navigation.navigate('GoCheckoutPage')}} style={{justifyContent:'center',alignItems:'center',padding:15,backgroundColor:'skyblue',borderRadius:10,marginTop:5}}>
                    <Text style={{color:'white'}}>Review payment and address</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default MyCart;