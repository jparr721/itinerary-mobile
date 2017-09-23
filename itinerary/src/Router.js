/**
 * Created by deonj on 9/22/2017.
 */

 import React from 'react';
 import { TabNavigator, TabBarBottom } from 'react-navigation';
 import { Icon } from 'react-native-elements';

 // Import Screen Files here
 // Example: import SavePage from './components/SavePage';
 import MainSearchPage from './components/MainSearchPage'
 import SavedLocPage from './components/SavedLocPage'

 const Router = TabNavigator(
   {
     MainSearchPage: {
       screen: MainSearchPage,
       path: '',
       navigationOptions: {
         tabBarIcon: ({tintColor}) => (
           <Icon
            name="home"
            type="material-community"
            size={28}
            color={tintColor}/>
         ),
       }
     },
 
     // Place the definition of your screen here, following the
     // model above
     SavedLocPage:{
      screen: SavedLocPage,
      path: '',
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon 
           name="folder-multiple"
           type="material-community"
           size={28}
           color={tintColor}/>
         ),
       }
     },
     //
   },
   {
     tabBarPosition: 'bottom',
     tabBarComponent: TabBarBottom,
     animationEnabled: true,
     swipeEnabled: true,
     tabBarOptions: {
       showIcon: true,
       showLabel: false,
       activeTintColor: '#FFCA28',
    },
   }
 );

 export default Router;
