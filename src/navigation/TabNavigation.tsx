import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ExploreStack} from './ExploreStack';
import {StadiumsScreen} from '../screens/stadiums/StadiumsScreen';
import {InformationScreen} from '../screens/Information/InformationScreen';
import {ContactsScreen} from '../screens/contacts/ContactsScreen';
import Text from '../components/Text';
import Icons from '../../assets/svgs';
import {Colors} from '../config/Colors';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

type TabNavigationParamList = {
  Explore: undefined;
  Stadiums: undefined;
  Information: undefined;
  Contacts: undefined;
};

const Tab = createBottomTabNavigator<TabNavigationParamList>();

interface TabBarIconWithLabelProps {
  icon: React.ReactNode;
  label: string;
  focused: boolean;
}

const TabBarIconWithLabel: React.FC<TabBarIconWithLabelProps> = React.memo(
  ({icon, label, focused}) => {
    return (
      <View style={styles.tabItemStyle}>
        {icon}
        <Text
          type="little"
          color={focused ? 'primary120' : 'gray60'}
          style={styles.label}>
          {label}
        </Text>
      </View>
    );
  },
);
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary120,
        tabBarInactiveTintColor: Colors.gray60,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={({route}) => ({
          headerShown: false,
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'HotelDetailsScreen') {
              return {display: 'none'};
            }
            return styles.tabBarStyle;
          })(route),
          tabBarIcon: ({color, focused}) => (
            <TabBarIconWithLabel
              icon={<Icons.HomeLine stroke={color} />}
              label="Explore"
              focused={focused}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Stadiums"
        component={StadiumsScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIconWithLabel
              icon={<Icons.Stadium stroke={color} />}
              label="Stadium"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={InformationScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIconWithLabel
              icon={<Icons.InfoCircle stroke={color} />}
              label="Information"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <TabBarIconWithLabel
              icon={<Icons.Phone stroke={color} />}
              label="Contacts"
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 65,
    backgroundColor: Colors.gray0,
  },
  tabItemStyle: {
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
  },
});
