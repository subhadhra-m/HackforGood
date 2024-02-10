import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    // Implement edit profile logic
    // For example: navigation.navigate('EditProfile');
  };

  const handleLogout = () => {
    navigation.navigate('VolunteerLoginPage');
  };

  const handleFeedback = () => {
    navigation.navigate('FeedbackPage'); // Navigate to the FeedbackScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('./assets/GUILogo.png')}
        />
        <Text style={styles.userName}>John Doe</Text>
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.headerText}>Activity Count:</Text>
            <Text style={styles.valueText}>3</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.headerText}>Volunteer Hours:</Text>
            <Text style={styles.valueText}>6</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEditProfile} style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 150,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  tableContainer: {
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginRight: 10,
  },
  valueText: {
    fontSize: 18,
    color: '#6b8e23',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#9ccb3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin:2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;










