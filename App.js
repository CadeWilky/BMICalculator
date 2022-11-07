import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);



export default class App extends Component {
  state = {
    bmi: '',
    height: '',
    weight: '',
  };

  onHeightChange = (height) => this.setState({ height });
  onWeightChange = (weight) => this.setState({ weight });


  onCompute = async () => {
    let { bmi, height, weight } = this.state;
    bmi = (parseFloat(weight) / (parseFloat(height) * (parseFloat(height)))) * 703;
    bmi = bmi.toFixed(1);
    var bmiMessage = 'Body Mass Index is ' + bmi;
    this.setState({bmi: bmiMessage})
    

  }

  render() {
    const { bmi, height, weight } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.toolbar}>BMI Calculator</Text>
        <ScrollView style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={this.onWeightChange}
            value={weight}
            placeholder="Weight in Pounds"
          />
          <TextInput
            style={styles.input}
            onChangeText={this.onHeightChange}
            value={height}
            placeholder="Height in Inches"
          />
          <TouchableOpacity onPress={this.onCompute} style={styles.button}>
            <Text style={styles.buttonText}>Compute BMI</Text>
          </TouchableOpacity>

          
          <Text style={styles.results}>{bmi}</Text>
          

        <Text style={styles.assessmentTitle}>Assessing Your BMI</Text>
        <Text style={styles.assessment}>Underweight: less than 18.5</Text>
        <Text style={styles.assessment}>Healthy: 18.5 to 24.9</Text>
        <Text style={styles.assessment}>Overweight: 25.0 to 29.9</Text>
        <Text style={styles.assessment}>Obese: 30.0 or higher</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    backgroundColor: '#f4511e',
    color: '#fff',
    textAlign: 'center',
    padding: 25,
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  preview: {
    backgroundColor: '#bdc3c7',
    flex: 1,
    height: 500,
  },
  input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 3,
    height: 40,
    padding: 5,
    marginBottom: 10,
    flex: 1,
    fontSize: 24,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#34495e',
    padding: 10,
    borderRadius: 3,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center'
  },
  assessmentTitle: {
    fontSize: 20,

  },
  assessment: {
    fontSize: 20,
    left: 20,

    
  },
  results: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 100,
  }
});