import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,Text} from 'react-native';
import { exp } from 'react-native/Libraries/Animated/Easing';

const Notification = () =>{
    return(
        <SafeAreaView>
            <View>
                <Text>Notification Page</Text>
            </View>
        </SafeAreaView>
    );
}

export default Notification;