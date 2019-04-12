import React from 'react';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Simple from './src/components/Simple';
import EvenOdd from './src/components/EvenOdd';
import { Reverse, Random } from './src/components/Multi';
import Counter from './src/components/Counter';
import Platforms from './src/components/Platforms';
import PropsValidate from './src/components/PropsValidate';
import Event from './src/components/Event';
import Grandfather from './src/components/DirectCom';
import IndirectCom from './src/components/IndirectCom';
import List from './src/components/List';
import Flex from './src/components/Flex';


const RootStack = createDrawerNavigator({
    Flex: {
        screen: () => <Flex />
    },
    List: {
        screen: () => <List />
    },
    IndirectCom: {
        screen: () => <IndirectCom />
    },
    Grandfather: {
        screen: () => <Grandfather name='John' surname='Charlander'/>
    },
    Event : {
        screen: () => <Event />
    },
    PropsValidate: {
        screen: () => <PropsValidate year={19} />
    },
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