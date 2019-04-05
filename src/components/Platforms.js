import React from 'react';
import { Button, Alert, ToastAndroid, Platform } from 'react-native';

export default props => {
    const notify = msg => {
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG);
        }else{
            Alert.alert('Inform', msg)
        }
    }

    return(
        <Button title='Plataform'
            onPress={() => notify('Welcome!') } />
    );
}
