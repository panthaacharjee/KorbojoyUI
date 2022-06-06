import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,Text,inputfield,Image,TouchableOpacity} from 'react-native';
const Header = ({navigation}) =>{

    return(
        <View style={{flexDirection:'row',justifyContent:'flex-end',width:'100%'}}>
            <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}   onPress={()=>{navigation.navigate('GoWelcomePage')}}>
                <Image style={{height:50,width:50,borderRadius:50,margin:5}} source={require('../assets/images/1614077507891.jpg')}/>
            </TouchableOpacity>
        </View>
    );
}

export default Header;