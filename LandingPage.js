
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
//import { useFonts, Montserrat_400Regular } from '@react-native-google-fonts/montserrat';

const LandingPage = ({ navigation }) => {
  /*let [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    // You can return a loading indicator here if the font is still loading
    return <Text>Loading...</Text>;
  }*/

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('./assets/GUILogo.png')}
        style={styles.logo}
      />
      <Text style={[styles.title]}>Welcome to GUI</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VolunteerLoginPage')}
      >
        <Text style={[styles.buttonText]}>I am a Volunteer!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StaffLoginPage')}
      >
        <Text style={styles.buttonText}>I am a Staff!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9ccb3c',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LandingPage;
