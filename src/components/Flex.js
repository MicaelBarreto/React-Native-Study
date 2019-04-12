import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: 20
    },
    north: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bdf9ed'
    },
    center: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#f2f9bd'
    },
    south: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#bdf9c4'
    },
    circle:{
        width: 100,
        height:100,
        backgroundColor: '#f47f61',
        borderRadius: 50
    }
});

const Circle = props => <View style={styles.circle}></View>

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.north}>
                <Circle />
            </View>
            <View style={styles.center}>
                <Circle />
                <Circle />
                <Circle />
            </View>
            <View style={styles.south}>
                <Circle />
            </View>
        </View>
    );
}