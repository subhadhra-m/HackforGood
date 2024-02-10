// src/VolunteerScreen.js
import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  Keyboard, TouchableWithoutFeedback
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from './firebaseConfig';
import { signInWithEmailAndPassword} from "firebase/auth";


/**
 * A function component for the LoginScreen 
 * @returns view of Login Page
 */
export default function VolunteerLoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('ProfilePage');
    } catch (error) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={[styles.container, { marginTop: 0}]}>
        <Image style={styles.logo} source={require("./assets/GUILogo.png")} />
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Email"
            value={email}
            placeholderTextColor="grey"
            onChangeText={(email) => setEmail(email)}
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Password"
            value={password}
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.links}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpPage')}
          >
            <Text style={styles.signup_button}>Sign up!</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={signIn}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  inputView: {
    borderWidth: 1,
    width: "75%",
    height: 50,
    marginBottom: 20,
    flexDirection: "row",  
    borderRadius: 10
  },
  TextInput: {
    height: 45,
    flex: 1,
    padding: 10,
    alignItems: "center",
    textAlign: "left",
  },
  links: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    textDecorationLine: "underline",
    alignItems: "flex-start",
  },
  signup_button: {
    height: 30,
    marginBottom: 30,
    textDecorationLine: "underline",
    alignItems: "flex-end",
  },
  loginBtn: {
    width: "75%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#9ccb3c",
  },
  loginText: {
    color: "#FFF",
  },
})
