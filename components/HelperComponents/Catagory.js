import React from 'react';
import { SafeAreaView,View,Text,Image,StyleSheet,TouchableOpacity,Button} from 'react-native';

const Catagory = ({GoCatagoryPage,navigation,catagory}) =>{
    return(
        <TouchableOpacity style={CatagoryStyle.catagoryContainer}
        key={catagory.id}
        onPress={() => {
            navigation.navigate('GoCatagoryPage', {
              catagory
            });
          }}
        >
            <Image style={CatagoryStyle.catagoryImage} source={require('../../assets/images/unsplash_tn7v-55TI4Q.png')} />
            <Text style={CatagoryStyle.catagoryText}>{catagory.title}</Text>
        </TouchableOpacity>
    );
}

export default Catagory;

const CatagoryStyle = StyleSheet.create({
     catagoryContainer:{
         width:100,
         borderRadius:10,
         backgroundColor:'whitesmoke',
         margin:10,
     },
     catagoryImage:{
         width:'100%',
         height:85,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:10
     },
     catagoryText:{
         color:'black',
         textAlign:'center',
         padding:2
     }
})
