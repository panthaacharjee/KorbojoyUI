import React from 'react'
import { SafeAreaViewBase,View,Text,Image,TouchableOpacity,StyleSheet } from 'react-native';

const ListViewProduct = ({product,navigation}) =>{
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate("GoSingleProductPage",{product})}} style={ListViewStyle.ListViewContainer} key={product.id}>
           <View style={{flex:0.35,paddingLeft:3}}>
             <Image style={ListViewStyle.ListViewImage} source={require('../../assets/images/unsplash_fOYg1lkZA7Y.png')}/>
           </View>
           <View style={{flex:1,paddingLeft:10,paddingRight:10}}>
                <View style={ListViewStyle.textContainer1} >
                    <Text style={{color:'black'}}>{product.name}</Text>
                    <Text style={{color:'black'}}>stock</Text>
                    <Text style={{color:'black'}}>+</Text>
                </View>
                <View style={ListViewStyle.textContainer2}>
                <Text style={{color:'black'}}>*****</Text>
                <Text style={{color:'black'}} >{product.fullDescription.slice(0,100)} ...</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>${product.buyPrice}</Text>
                    <Text>+</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ListViewProduct;

const ListViewStyle = StyleSheet.create({
    ListViewContainer:{
        flexDirection:'row',
        alignItems:'center',
        margin:10,
        borderRadius:10,
        padding:5,
        backgroundColor:'whitesmoke',
    },
    ListViewImage:{
       width:'100%',
       borderRadius:10
    },
    textContainer1:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
})


