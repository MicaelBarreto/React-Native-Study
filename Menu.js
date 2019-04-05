import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import Simple from './src/components/Simple';
import EvenOdd from './src/components/EvenOdd';
import { Reverse, Random } from './src/components/Multi';
import Counter from './src/components/Counter';
import Platforms from './src/components/Platforms';

const RootStack = createDrawerNavigator({
    Platforms: {
        screen: () => <Platforms />
    },
    Counter: {
        screen: () => <Counter />
    },
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