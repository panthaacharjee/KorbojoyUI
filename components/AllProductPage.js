import React from 'react';
import { ScrollView,SafeAreaView,View,Text,Image,StyleSheet,Button} from 'react-native';
import Product from './HelperComponents/Product';
import ListViewProduct from './HelperComponents/LIstViewProduct';
import {useState,useEffect} from 'react'
//import { Products } from '../dummydata/DumyProductData';

const AllProductPage = ({navigation,route}) =>{
    const [Products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://baybridgebd.com/api/ev1/RecentProduct')
         .then((response)=> response.json())
         .then((json)=>{
             setProducts(json)
         })
    });

    return(
        <ScrollView style={{flex:1}}>
            <View style={{padding:10}}>
                   <Text style={{color:'#086266',fontFamily:'Roboto',fontWeight:'bold', fontSize:14,lineHeight:17,marginLeft:10,textAlign:'center'}}>All Products</Text> 
                   <View style={{padding:10}}>
                   {
                       Products.map((product=>(
                           <ListViewProduct navigation={navigation} product={product}/>
                       )))
                   }
                   </View>
             </View>
        </ScrollView>
    );
}

export default AllProductPage;