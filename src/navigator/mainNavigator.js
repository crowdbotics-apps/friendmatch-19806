import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings94618Navigator from '../features/Settings94618/navigator';
import UserProfile94611Navigator from '../features/UserProfile94611/navigator';
import Settings94610Navigator from '../features/Settings94610/navigator';
import Settings94608Navigator from '../features/Settings94608/navigator';
import SignIn294606Navigator from '../features/SignIn294606/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings94618: { screen: Settings94618Navigator },
UserProfile94611: { screen: UserProfile94611Navigator },
Settings94610: { screen: Settings94610Navigator },
Settings94608: { screen: Settings94608Navigator },
SignIn294606: { screen: SignIn294606Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
