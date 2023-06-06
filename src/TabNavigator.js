import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Favoritar';
import Profile from './pages/Perfil';
import Info from './pages/Configs';
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
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
                name="Plataformas"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return <MaterialIcons name="games" size={24} color="black" />
                        }
                        return <MaterialIcons name="games" size={24} color="black" />
                    }
                }}
            />
            <Tab.Screen
                name="Configurações"
                component={Info}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, focused }) => {
                        if (focused) {
                            return <Ionicons name="settings" size={size} color={"black"} />
                        }
                        return <Ionicons name='settings' size={size} color={"black"} />
                    }
                }}
            />
                <Tab.Screen
                    name="Perfil"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ size, focused }) => {
                            if (focused) {
                                return <AntDesign name="profile" size={24} color="black" />
                            }
                            return <AntDesign name="profile" size={24} color="black" />
                        }
                    }}
                />
        </Tab.Navigator>
    )
}
export default TabNavigator;