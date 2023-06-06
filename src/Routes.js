import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Info from './pages/Info';
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderTopWidth: 0,

                    bottom: 3,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 8,
                    height: 60,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return <MaterialIcons name="games" size={24} color="#00BFFF" />
                        }
                        return <MaterialIcons name="games" size={24} color="#00BFFF" />
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return <AntDesign name="profile" size={24} color="#00BFFF" />
                        }
                        return <AntDesign name="profile" size={24} color="#00BFFF" />
                    }
                }}
            />
            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return <Ionicons name="settings" size={size} color={"#00BFFF"} />
                        }
                        return <Ionicons name='settings-outline' size={size} color={"#00BFFF"} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}
export default Routes;