import React, { useState } from 'react';
import { StatusBar, Button, StyleSheet, View, Text, TextInput, Alert,TouchableHighlight,TouchableOpacity} from 'react-native';
import Spacer from './spacer'; // Assuming the Spacer component file is in the same directory
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getDatabase, ref, push } from 'firebase/database';

//const Spacer = ({ height }) => <View style={{ height }} />;

const Stack = createStackNavigator();

const FeedbackScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [writtenFeedback, setWrittenFeedback] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const OptionButton = ({ label, index }) => {
    const isSelected = selectedIndex === index; // Check if this option is selected
    return (
      <TouchableHighlight
        style={[styles.optionButton, isSelected && styles.selectedOption]}
        onPress={() => setSelectedIndex(index)}
        underlayColor="lightgray"
      >
        <View style={styles.optionContainer}>
          <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]} />
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

const handleSubmitFeedback = async () => {
  if (!selectedCategory || !writtenFeedback) {
    Alert.alert('Please select a category and provide feedback.');
    return;
  }

  const db = getFirestore();
  const feedbackCollection = collection(db, 'feedback');

  try {
    await addDoc(feedbackCollection, {
      category: selectedCategory,
      feedback: writtenFeedback,
    });
    Alert.alert('Feedback submitted successfully!');
    setSelectedCategory(null);
    setWrittenFeedback('');
  } catch (error) {
    console.error('Error adding feedback: ', error);
    Alert.alert('Failed to submit feedback. Please try again later.');
  }
};

  const _onPressButton = () => {
    if (!selectedCategory) {
      Alert.alert('Please select a category.');
      return;
    }

    Alert.alert(`Thank you for your feedback! Category: ${selectedCategory}, Written Feedback: ${writtenFeedback}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.labelStyles}>
          Overall, how was your experience at GUI?
        </Text>
        <View style={styles.radioGroup}>
          <OptionButton label="Very Satisfied" index={0} />
          <OptionButton label="Satisfied" index={1} />
          <OptionButton label="Neutral" index={2} />
          <OptionButton label="Dissatisfied" index={3} />
          <OptionButton label="Very Dissatisfied" index={4} />
        </View>
      </View>
      <Spacer height={10} />
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Event planning' && styles.selectedCategoryButton]}
          onPress={() => handleCategoryPress('Event planning')}
        >
          <Text style={styles.categoryButtonText}>Event planning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Activities' && styles.selectedCategoryButton]}
          onPress={() => handleCategoryPress('Activities')}
        >
          <Text style={styles.categoryButtonText}>Activities</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Outreach' && styles.selectedCategoryButton]}
          onPress={() => handleCategoryPress('Outreach')}
        >
          <Text style={styles.categoryButtonText}>Outreach</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.categoryButton, selectedCategory === 'Others' && styles.selectedCategoryButton]}
          onPress={() => handleCategoryPress('Others')}
        >
          <Text style={styles.categoryButtonText}>Others</Text>
        </TouchableOpacity>
      </View>
      <Spacer height={15} />
      <TextInput
        placeholder="How could we improve our services?"
        multiline
        style={styles.inputStyle}
        onChangeText={setWrittenFeedback}
        value={writtenFeedback}
      />
      <Text style={styles.textStyle}>Character Limit: 1200</Text>
      <Spacer height={15} />
      <TouchableOpacity
                onPress={() => {
                  _onPressButton(); handleSubmitFeedback();
                }}
                style={styles.buttonContainer4}
            >
                <Text style={styles.buttonText4}> Give feedback </Text>
            </TouchableOpacity>
    
      
    </View>
  );
};

const RadioButton = ({ label }) => {
  return (
    <View style={styles.radioButton}>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight + 30,
    paddingHorizontal: 15,
  },
  labelStyles: {
    fontSize: 18,
    fontWeight: '400',
    paddingTop: 15
  },
  optionButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
  },
  radioView: {
    paddingHorizontal: 15,
  },
  radioGroup: {
    marginTop: 10,
  },
  inputStyle: {
    height: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#9ccb3c' ,
    borderRadius: 8,
    padding: 10,
  },
  buttonContainer4: {
    marginVertical: 10,
    height: 50,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#9ccb3c',
    flexDirection: 'row',
},
buttonText4: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
},
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
  },
  radioButtonSelected: {
    backgroundColor: '#9ccb3c', // Change color for selected option
  },

  categoryButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedCategoryButton: {
    backgroundColor: '#9ccb3c',
  },
  categoryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

});

export default FeedbackScreen;