import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Data from "../pages/Data";
import Add from "../pages/Add"
import AddSuccess from "../pages/AddSuccess";
import Settings from "../pages/Settings";


const Stack  = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>

            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />

            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />

            <Stack.Screen name="Home" component={Tabs} options={{headerShown: false}} />

        </Stack.Navigator>
    )
}

function Tabs(){
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel: false, 
                tabBarActiveTintColor: '#38a69d',
                }}>

            <Tab.Screen 
                name="Home" 
                component={HomeStack} 
                options={{
                    headerShown: false, 
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color={color}/>
                            }
                            return <Ionicons name="home-outline" size={size} color={color}/>
                    }
                }}/>

            <Tab.Screen 
                name="Data" 
                component={Coleta} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="bookmark" size={size} color={color}/>
                            }
                            return <Ionicons name="bookmark-outline" size={size} color={color}/>
                    }
                }}/>

            <Tab.Screen 
                name="Settings"
                component={Settings} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="settings" size={size} color={color}/>
                            }
                            return <Ionicons name="settings-outline" size={size} color={color}/>
                    }
                }}
                />
                
        </Tab.Navigator>
    )
}

function Coleta(){
    return(
        <Stack.Navigator>

            <Stack.Screen name="Data" component={Data} options={{headerShown: false}} />

            <Stack.Screen name="Add" component={Add} options={{headerShown: false}} />

            <Stack.Screen name="AddSuccess" component={AddSuccess} options={{headerShown: false}} />

        </Stack.Navigator>
    )
}

function HomeStack(){
    return(
        <Stack.Navigator>

            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />

            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />

        </Stack.Navigator>
    )
}
