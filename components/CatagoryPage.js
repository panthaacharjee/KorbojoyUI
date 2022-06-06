import React from 'react';
import {ScrollView, SafeAreaView,View,Image,Text,StyleSheet,Button,TouchableOpacity } from 'react-native';
import Catagory from './HelperComponents/Catagory';
import Product from './HelperComponents/Product';
const CatagoryPage = ({route, navigation}) =>{
    const catagory = route.params;
    const subCatagories = [
       {
        title:"subCat",
        photo:""
       },
       {
        title:"subCat",
        photo:""
       },
       {
        title:"subCat",
        photo:""
       },
       {
        title:"subCat",
        photo:""
       },
    ]
    const GoSingleProductPage = () =>{
        navigation.navigate('GoSingleProductPage')
    }

    return(
        <ScrollView style={{flex:1,width:'100%'}}>
            <View>
                <Image style={{width:'100%',height:250,borderBottomLeftRadius:15,borderBottomRightRadius:15}} source={require('../assets/images/unsplash_2cFZ_FB08UM.png')}/>
            </View>
            <View style={{alignSelf:'stretch',width:'100%',padding:10,justifyContent:'center'}}>
                <Text>Sub Catagory</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{flexDirection:'row',alignSelf:'stretch',width:'100%'}} >
                     {
                      subCatagories.map(cat=>(
                           <Catagory catagory={cat} navigation={navigation}/>
                       ))
                      }
               </ScrollView>
            </View>
            
            <View style={{padding:10}}>
                 <Text style={{color:'#086266',fontFamily:'Roboto',fontWeight:'bold',fontSize:14,lineHeight:17,marginLeft:10}}>Products</Text>
                 <View style={{flexDirection:'row',flexWrap:'wrap'}}>

                 </View>
            </View>
            <TouchableOpacity  onPress={()=>{navigation.goBack()}} style={{alignItems:'center',backgroundColor:'gray',position:'absolute',top:10,left:10,height:40,width:40,borderRadius:50}}>
                <Text style={{padding:10,color:'black',textAlign:'center'}}>b</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default CatagoryPage;

const CatagoryPageStyle = StyleSheet.create({
      
})