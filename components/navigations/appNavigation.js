import React from 'react'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import ScreenOne from '../Screens/screenOne'
import ScreenTwo from '../Screens/screenTwo'
import ScreenThree from '../Screens/screenThree'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button } from 'react-native'

// drawer stack
const DrawerStack = createDrawerNavigator({
    screen1: { screen: ScreenOne },
    screen2: { screen: ScreenTwo },
    screen3: { screen: ScreenThree },
  })
  
  const drawerButton = (navigation) =>(
    <Button  onPress={() => navigation.navigate('DrawerOpen')} title='hhe'>
        
    </Button>
  )
  
  const DrawerNavigation = createStackNavigator({
    DrawerStack: { screen: DrawerStack }
  }, {
    headerMode: 'float',
    //headerMode:'none',
    navigationOptions: ({navigation}) => ({
      title: 'ReactDrawerRedux',
      headerLeft: drawerButton(navigation)
    })
  })
  
  // login stack
  const LoginStack = createStackNavigator({
    loginScreen: { screen: ScreenOne },
    signupScreen: { screen: ScreenThree, navigationOptions: { title: 'Sign Up' }  },
   // forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
  }, {
    navigationOptions: {
      headerStyle: {backgroundColor: '#E73536'},
      title: 'You are not logged in',
      headerTintColor: 'white'
    }
  })
  
//   const initialStack = createStackNavigator({
//     initialScreen : {screen : InitialScreen}
//   })
  
  // Manifest of possible screens
  const AppNavigation = createStackNavigator({
    drawerStack: { screen: DrawerNavigation },
    loginStack: { screen: LoginStack },
   // initialStack : {screen: initialStack}
  }, {
    headerMode: 'none',
    title: 'Main',
  //  initialRouteName: 'initialStack',
  })
  export default AppNavigation