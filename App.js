// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet} from 'react-native';
import LandingPage from './LandingPage';
import VolunteerLoginPage from './VolunteerLoginPage';
import StaffLoginPage from './StaffLoginPage';
import SignUpPage from './SignUpPage';
import ProfilePage from './ProfilePage';
import FeedbackScreen from './FeedbackScreen';
import ForgotPasswordPage from './ForgotPasswordPage';
import Activities from "./Activities.json";
import Workshop from "./Workshop";
import HomeScreen from './HomeScreen';
import Survey from './Survey';
import { FontAwesome, MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import FeedbackScreen2 from './Feedback';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false, animation: 'none' }}/>
        <Stack.Screen name="VolunteerLoginPage" component={VolunteerLoginPage} 
        options={{ headerShown: false, animation: 'none' }}/>
        <Stack.Screen name="StaffLoginPage" component={StaffLoginPage} 
        options={{ headerShown: false, animation: 'none' }}/>
        <Stack.Screen name="SignUpPage" component={SignUpPage} 
        options={{ headerShown: false, animation: 'none' }}/>
        <Stack.Screen name="ProfilePage" component={ProfilePage} 
        options={{ headerShown: false, animation: 'none' }}/>
        <Stack.Screen name="FeedbackPage" component={FeedbackScreen} 
        options={{ headerShown: false, animation: 'none' }}/>
        <Stack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage} 
        options={{ headerShown: false, animation: 'none' }}/>
        <Stack.Screen
          name="RegisterPage"
          component={HomePage}
          options={{ headerShown: false, animation: 'none' }}
        />
        <Stack.Screen
          name="Workshop"
          component={Workshop}
          options={{ headerShown: false, animation: 'none' }}
        />
        <Stack.Screen
          name="Survey"
          component={Survey}
          options={{ headerShown: false, animation: 'none' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const HomePage = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#9ccb3c',
      tabBarInactiveTintColor: '#D7E4BE',
      tabBarStyle: {
        backgroundColor: 'white',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    }}}>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            marginBottom: 5
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={32} color={color} />
          )
        }}/>
      <Tab.Screen name="Feedback" component={FeedbackScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Feedback',
          tabBarLabelStyle: {
            marginBottom: 5
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="feedback" size={32} color={color} />
        )}}/>
        <Tab.Screen name="Profile" component={ProfilePage}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            marginBottom: 5
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={32} color={color} />
        )}}/>
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    backgroundColor:'#9ccb3c',
    justifyContent: 'flex-end',
    paddingBottom: 15
  },
  body: {
    flex: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  activity: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    margin: 10,
    marginVertical: 20
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20
  }, 
  label: {
    fontSize: 15,
    width: '100%',
    color: 'black',
    fontWeight: '700'
  }
});