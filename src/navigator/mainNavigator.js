import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed195444Navigator from '../features/Feed195444/navigator';
import Maps295443Navigator from '../features/Maps295443/navigator';
import Messaging395442Navigator from '../features/Messaging395442/navigator';
import NotificationList495441Navigator from '../features/NotificationList495441/navigator';
import SignIn4695439Navigator from '../features/SignIn4695439/navigator';
import Camera795438Navigator from '../features/Camera795438/navigator';
import CalendarView895437Navigator from '../features/CalendarView895437/navigator';
import ArticleList995436Navigator from '../features/ArticleList995436/navigator';
import UserProfile1095435Navigator from '../features/UserProfile1095435/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed195444: { screen: Feed195444Navigator },
Maps295443: { screen: Maps295443Navigator },
Messaging395442: { screen: Messaging395442Navigator },
NotificationList495441: { screen: NotificationList495441Navigator },
SignIn4695439: { screen: SignIn4695439Navigator },
Camera795438: { screen: Camera795438Navigator },
CalendarView895437: { screen: CalendarView895437Navigator },
ArticleList995436: { screen: ArticleList995436Navigator },
UserProfile1095435: { screen: UserProfile1095435Navigator },

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
