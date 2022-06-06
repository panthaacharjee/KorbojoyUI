import React from 'react';
import {SafeAreaView,View,Image,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Product = ({navigation,product}) =>{
    return(
        <TouchableOpacity onPress={()=>{navigation.navigate("GoSingleProductPage",{product})}} style={Productstyle.productContainer}  >
            <Image style={Productstyle.productImage} source={require('../../assets/images/ProductImage.png')}/>
           <View style={Productstyle.ProductTextContainer}>
               <View>
                   <Text style={{color:'black'}}>{product.name}</Text>
                   <Text style={{color:'black'}}>*****</Text>
               </View>
               <View>
                   <Text style={{color:'black'}}>Stock</Text>
                   <Text style={{color:'black'}}>${product.buyPrice}</Text>
               </View>
           </View>
        </TouchableOpacity>
    );
}

export default Product;

const Productstyle = StyleSheet.create({
    productContainer:{
        width:'30%',
        borderRadius:10,
        backgroundColor:'whitesmoke',
        margin:5,
        padding:5
    },
    productImageContainer:{

    },
    productImage:{
        width:'100%',
        borderRadius:10
    },
    productAddButton:{
        
    },
    ProductTextContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    productTextChildContainer1:{

    },
    ProductTextChildContainer2:{

    }
})