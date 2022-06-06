import React from 'react';
import {SafeAreaView,StatusBar,StyleSheet,View,Text} from 'react-native';
import {useState,useContext} from 'react';
import Slider from './components/Slider';
import ButtonTabNav from './Routes/ButtonTabNav';
import { ShoppingCartProvider } from './StateMagager/ShoppingCartContext';
const App = () =>{
  const [goHome,setGoHome] = useState(false);
  let GoHome = () =>{
    setGoHome(true);
  }
  return( 
    <SafeAreaView style={styles.AppContainer}>
      <StatusBar style="auto"/>
      {
        goHome ?
        <ButtonTabNav/>
               :
        <Slider GoHome={GoHome} />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
   AppContainer:{
     flex:1,
   }
});

export default App;