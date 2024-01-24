import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home } from '../Screens/Home/Home';
import Profile from '../Screens/Profile';
import { Search } from '../Screens/search/Search';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 200,
        tabBarActiveTintColor: "COLORS.primary",
        tabBarInactiveTintColor: "#C1C0C8",
        display: "flex"
    },

};

const BottomTabNavigation = () => {
    return (
        <>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {

                            iconName = focused ? 'home' : 'home-outline';
                            

                        } else if (route.name === 'Search') {
                            iconName = 'search-sharp'
                        }
                        else {
                            iconName = focused ? 'person' : 'person-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        elevation: 0,
                        height: 70,
                    },

                })}

                tabBarOptions={{
                    activeTintColor: 'COLORS.primary',
                    inactiveTintColor: '#C1C0C8',
                    tabBarShowLabel: false,
                   
                }}

            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                />
                <Tab.Screen
                    name="Search"
                    component={Search}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                />
            </Tab.Navigator>


        </>
    );
};

export default BottomTabNavigation;
