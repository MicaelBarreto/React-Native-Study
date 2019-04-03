import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import Simple from './src/components/Simple';
import EvenOdd from './src/components/EvenOdd';
import { Reverse, Random } from './src/components/Multi';

const RootStack = createDrawerNavigator({
    Random: {
        screen: () => <Random numbers={8} />,
        navigationOptions: {title: 'Random'}
    },
    Reverse: {
        screen: () => <Reverse text='react' />
    },
    EvenOdd: {
        screen: () => <EvenOdd number={25} />,
        navigationOptions: { title: 'EvenOdd'}
    },
    Simple: { 
        screen: () => <Simple text='Welcome' />
    }
}, { drawerWidth: 300 })

const App = createAppContainer(RootStack);

export default App;