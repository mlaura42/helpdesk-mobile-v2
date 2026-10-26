
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function LayoutAbas() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#12355B',
                tabBarInactiveTintColor: '#777777',

                headerStyle: {
                    backgroundColor: '#12355B'
                },

                headerTintColor: '#FFFFFF'
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Chamados',

                    tabBarIcon: ({ color }) => (
                        <Text style={{ color, fontSize: 18 }}>☰</Text>
                    )
                }}
            />

            <Tabs.Screen
                name="sobre"
                options={{
                    title: 'Sobre',

                    tabBarIcon: ({ color }) => (
                        <Text style={{ color, fontSize: 18 }}>ℹ️</Text>
                    )
                }}
            />

        </Tabs>
    );
}
