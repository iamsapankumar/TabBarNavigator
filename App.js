import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

class Home extends Component {
    static navigationOptions = {
        tabBarLabe:'Home',
        tabBarIcon:({tintColor})=>(
            <Icon name='md-home' size={25} color={tintColor}/>
        )
    }
    render(){
        return(
            <View>
               <Text> Home Screen</Text> 
            </View>
        );
    }
}

class Profile extends Component {
    static navigationOptions = ({tintColor})=>({
        tabBarLabel:'Profile',
        tabBarIcon:(
           // <Icon name ='md-menu' size={25}  color={tintColor}/>
           <Image source={require('./assets/insta.png')} 
           style={{width:25, height:22, backgroundColor:tintColor}}/>
        )
    })
    render(){
        return(
            <View>
               <Text> profile Screen</Text> 
            </View>
        );
    }
}

const CustomTab = createBottomTabNavigator({
    Home: {screen: ()=> null},
    Profile: { screen: Profile},
    
},{
    tabBarOptions:{
        tabStyle:{
           // flex:1,
            //flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }, 
        //activeBackgroundColor:'green',
        //inactiveBackgroundColor:'red',
        activeTintColor:'red',
        inactiveTintColor: 'blue',
    
        //showIcon:true,
       // iconStyle:{ },
      upperCaseLabel:false,
      
        showLabel:true,
        labelStyle:{
            fontWeight:'bold',
           
        },
        style:{
            backgroundColor:'white',
            borderTopWidth:3,
            borderTopColor:'red'
        }
        
        
    }
})








export default class App extends Component {
    render(){
        return(
            <CustomTab/>
        )
    }
}