import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity, BackHandler,
    Keyboard, TouchableWithoutFeedback
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FIREBASE_AUTH } from './firebaseConfig';
import { sendPasswordResetEmail } from "firebase/auth";
import Constants from 'expo-constants'
import { Ionicons } from '@expo/vector-icons';

/**
 * 
 * @returns view of the Forgot Password Page which users will be directed to upon clicking on 
 * the underlined 'Forgot Password?' touchable in the login page. The forgot password button sends
 * a link to the email address entered.
 */
export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.goBack();
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
      };
    })
  );

  const resetPass = async () => {
    setLoading(true);
    try {
      const response = await sendPasswordResetEmail(auth, email);
      console.log(response);
      alert('A password reset link has been sent to ' + email + "!");
      navigation.navigate('VolunteerLoginPage');
    } catch (error) {
      console.log(error);
      alert('Reset failed: ' + error.message);
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
            value={email}
            placeholder="Enter Email"
            placeholderTextColor="grey"
            onChangeText={(email) => setEmail(email)}
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={resetPass}
        >
          <Text style={styles.loginText}>RESET PASSWORD</Text>
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
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    borderRadius: 10
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    alignItems: "center",
    textAlign: "center",
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
    width: "70%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#7B5E3E",
  },
  loginText: {
    color: "#FFF",
  },
  accountBtn: {
    borderWidth: 1,
    width: "70%",
    borderRadius: 5,
    height: 50,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  }
})
