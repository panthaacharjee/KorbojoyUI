import React from 'react';
import { ScrollView,SafeAreaView,View,Text,Image,StyleSheet,Button} from 'react-native';
import Catagory from './HelperComponents/Catagory';
import Product from './HelperComponents/Product';
import ListViewProduct from './HelperComponents/LIstViewProduct';
import { useEffect,useState } from 'react';
//import { Products } from '../dummydata/DumyProductData';

const Home = ({navigation}) => {

    const [catagories,setCatagories] = useState([])
    const [Products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://baybridgebd.com/api/ev1/GetCategoryData')
         .then((response)=> response.json())
         .then((json)=>{
             setCatagories(json)
         })
    });


    useEffect(()=>{
        fetch('https://baybridgebd.com/api/ev1/RecentProduct')
         .then((response)=> response.json())
         .then((json)=>{
             setProducts(json)
         })
    });
    return(
        <ScrollView style={HomeStyle.HomeContainer} showsVerticalScrollIndicator={false}>
            <View style={HomeStyle.CatagoryContainer} >
                 <Text style={HomeStyle.HomeTexts}>Catagory</Text>
                 <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{flexDirection:'row'}} >
                        {
                         catagories.map(catagory=>(
                              <Catagory navigation={navigation} catagory={catagory} />
                          ))
                        }
                 </ScrollView>
            </View>

            <View style={HomeStyle.SliderContainerHome}>
                 <Image style={{width:'100%',height:'100%',borderRadius:15}} source={require('../assets/images/IMG_5742.jpg')} />
            </View>

            <View style={{padding:10}}>
                  <Text style={HomeStyle.HomeTexts}>For Sale</Text>
                  <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                  {
                       Products.slice(0,6).map((product=>(
                           <Product navigation={navigation} product={product}/>
                       )))
                   }
                  </View>
            </View>
            
            <View style={{padding:10}}>
                <Text style={HomeStyle.HomeTexts}>Popular</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                   {
                       Products.slice(0,6).map((product=>(
                           <Product navigation={navigation} product={product}/>
                       )))
                   }
                </View>
            </View>
            
            <View style={{padding:10}}>
                   <Text style={HomeStyle.HomeTexts}>Products</Text> 
                   <View style={{padding:10}}>
                   {
                       Products.slice(0,5).map((product=>(
                           <ListViewProduct navigation={navigation} product={product}/>
                       )))
                   }
                   <Text style={HomeStyle.HomeTexts} onPress={()=>{navigation.navigate("GoAllProductPage",{Products})}}>all</Text>
                   </View>
             </View>

             <View style={{padding:10}}>
             <Text style={HomeStyle.HomeTexts}>Last View</Text>
                <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
                   {
                       Products.slice(0,9).map((product=>(
                           <Product navigation={navigation} product={product}/>
                       )))
                   }
                </View>
             </View>
        </ScrollView>
    );
}

export default Home;

const HomeStyle = StyleSheet.create({
    HomeContainer:{
        flex:1,
        backgroundColor:'white'
    },
    CatagoryContainer:{
        width:'100%',
        alignSelf:'stretch',
        padding:10,
        justifyContent:'center',
    },
    SliderContainerHome:{
        height:200,
        padding:10,
        borderRadius:15
    },
    HomeTexts:{
        color:'#086266',
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:14,
        lineHeight:17,
        marginLeft:10
    },
})