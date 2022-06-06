import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {View,Text,Button,Image,TouchableOpacity} from 'react-native';
import Product from './HelperComponents/Product';
import {useState,useContext} from 'react';
//import { ShoppinCartContext } from '../StateMagager/ShoppingCartContext';

const SinglePage = ({navigation,route}) =>{
    
    let {product} = route.params;
   // let [CartItems,SetCartItems] = useContext(ShoppinCartContext);
    const [cartButton,setcartButton] = useState(false);
    const [itemNumber,setItemNumber] = useState(0)

    let itemAdd = () =>{
        setcartButton(true);
        setItemNumber(itemNumber+1)
    }
    let itemIncrement = () =>{
        setItemNumber(itemNumber+1)
    }
    let itemDecrement = () =>{
        if(itemNumber>0){
            setItemNumber(itemNumber-1)
        }
    }

    return(
        <ScrollView key={product.id}>
            <View style={{borderBottomWidth:2.2,borderColor:'#9C9C9C'}}>
               <Image style={{width:'100%',height:300,borderBottomLeftRadius:15,borderBottomRightRadius:15}} source={require('../assets/images/unsplash_2cFZ_FB08UM.png')}/>
               <View style={{padding:15}}>
                   <Text style={{color:'black',fontSize:20}}>{product.name}</Text>
                   <Text style={{color:'black'}}>*****</Text>
                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                       <Text style={{color:'#086266',fontSize:20}}>Tk: {product.buyPrice}</Text>
                       <View style={{flexDirection:'row'}}>
                            <Text style={{paddingRight:10}}>m</Text>
                            <Text style={{paddingLeft:10}}>s</Text>
                       </View>
                   </View>
               </View>
            </View>

            <View style={{borderBottomWidth:2.2,borderColor:'#9C9C9C',padding:15}} >
                <Text style={{lineHeight:30,fontWeight:'bold',color:'black'}} >Details</Text>
                <Text style={{marginBottom:10,color:'black'}}>
                    {product.fullDescription.slice(0,200)}
                    <Text style={{color:'red'}} onPress={()=>{alert(product.description)}}> see more</Text>
                </Text>
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                     {
                         (cartButton && itemNumber > 0) ? 
                            <TouchableOpacity onPress={itemDecrement} style={{flex:0.1,padding:10,borderRadius:7,textAlign:'center',backgroundColor:'#086266',marginRight:5}}>
                                <Text style={{textAlign:'center',color:'white'}}>-</Text>
                            </TouchableOpacity>
                         :
                         <Text></Text>
                     }
                     {
                         (cartButton && itemNumber > 0)
                         ?
                         <Text style={{textAlign:'center',flex:1 ,padding:10,borderRadius:7,alignItems:'center',backgroundColor:'skyblue'}}>{itemNumber}</Text>
                         :
                         <TouchableOpacity onPress={itemAdd} style={{flex:1 ,padding:10,borderRadius:7,alignItems:'center',backgroundColor:'#086266'}}>
                             <Text>Add to cart</Text>
                         </TouchableOpacity>
                     }
                     {
                         (cartButton && itemNumber > 0) ? 
                            <TouchableOpacity onPress={itemIncrement} style={{flex:0.1,padding:10,borderRadius:7,textAlign:'center',backgroundColor:'#086266',marginLeft:5}}>
                                <Text style={{textAlign:'center',color:'white'}}>+</Text>
                            </TouchableOpacity>
                         :
                         <Text></Text>
                     }
                    <Text style={{flex:0.1,padding:10,borderRadius:7,textAlign:'center',backgroundColor:'pink',marginLeft:5}}>L</Text>
                </View>
            </View>

            <View style={{padding:15,}} >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',color:'black'}}>Color : </Text>
                    <Text style={{width:30,height:30,backgroundColor:'green',margin:5}}></Text>
                    <Text style={{width:30,height:30,backgroundColor:'pink',margin:5}}></Text>
                    <Text style={{width:30,height:30,backgroundColor:'skyblue',margin:5}}></Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:0.5,color:'black',fontWeight:'bold'}}>Brand : </Text>
                    <Text style={{flex:1}} >I Watch</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:0.5,color:'black',fontWeight:'bold'}}>Special Feature : </Text>
                    <Text style={{flex:1}}>Time Display, Sleep Monitor, GPS</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:0.5,color:'black',fontWeight:'bold'}}>Screen Size : </Text>
                    <Text style={{flex:1}}>1.39 Inches</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:0.5,color:'black',fontWeight:'bold'}}>Operating System : </Text>
                    <Text style={{flex:1}}>Android</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:0.5,color:'black',fontWeight:'bold'}}>Style : </Text>
                    <Text style={{flex:1}}>Modern</Text>
                </View>
                <Text style={{marginTop:5,color:'#086266'}} onPress={()=>{}}>see more</Text>
            </View>
            <View style={{padding:15}}>
                <Text style={{lineHeight:30,fontWeight:'bold',color:'#086266'}}>Related Item</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    <Product navigation={navigation} product={product}/>
                    <Product navigation={navigation} product={product}/>
                    <Product navigation={navigation} product={product}/>
                </View>
            </View>
            <TouchableOpacity  onPress={()=>{navigation.goBack()}} style={{alignItems:'center',backgroundColor:'gray',position:'absolute',top:10,left:10,height:40,width:40,borderRadius:50}}>
                <Text style={{padding:10,color:'black',textAlign:'center'}}>b</Text>
            </TouchableOpacity>  
        </ScrollView>
    );
}

export default SinglePage;