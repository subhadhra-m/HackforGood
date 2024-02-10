import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
  BackHandler, Keyboard, TouchableWithoutFeedback
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_DB } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { set, ref, onValue, push, update, remove } from 'firebase/database';



/**
 * A function component for the SignUp page
 * @returns view of SignUp screen which users will be directed to upon clicking on the underlined
 * 'Sign up' touchable in the Login page.
 */
export default function SignUpPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
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


  const signUp = async () => {
    if (password != passwordConfirm) {
      alert('Your passwords do not match. Please try again.')
    }
    else if (password.length < 6) {
      alert("Sign up failed: Password is too short, enter minimum 6 characters.")
    }
    else {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        console.log('User signed up');
        const user = auth.currentUser;
        writeUserData(user);
        alert('You can now log in!');
        navigation.navigate('VolunteerLoginPage');
      } catch (error) {
        console.log(error);
        alert('Sign up failed: ' + error.message);
      }
    }
  }

  function writeUserData(user) {
    const db = FIREBASE_DB;
    set(ref(db, 'users/' + user.uid), {
      FavouritesIsEmpty: true
    }).then(() => {
      console.log('User data created');
    }).catch((error) => {
      alert(error);
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={[styles.container, { marginTop: 0}]}>
        <Image style={styles.logo} source={require("./assets/GUILogo.png")} />
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            value={email}
            style={styles.TextInput}
            placeholder="Enter Email"
            placeholderTextColor="grey"
            onChangeText={(email) => setEmail(email)}
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            value={password}
            style={styles.TextInput}
            placeholder="Enter Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            value={passwordConfirm}
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={(passwordConfirm) => setPasswordConfirm(passwordConfirm)}
          />
        </View>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={signUp}
        >
          <Text style={styles.loginText}>SIGN UP</Text>
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