// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BlurView } from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';


function StartScr1({ navigation }) {
  return (
    <React.Fragment>
    <View style={[{flexDirection: 'column'}, {gap:20}]}>
      <View 
      style={styles.ImageContainer}>
        <Image
          source={require('./src/assets/images/hero-photo.png')}
          style={styles.image} />
          
      </View >
      <View style={{marginLeft: 30}}>

      <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          Explore
          </Text>
          <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          The Beautiful
          </Text>
          <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          World!
          </Text>

      </View>
      <View

      
        style={styles.ButtonContainer}>
      
        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => navigation.navigate("Opening 2")}>
            
          <Text style={{color: "white"}} >Next</Text>

          <Image
              source={require('./src/assets/images/Vector.png')}
              style={styles.icon} />

        </TouchableOpacity>

        

      </View>
    </View>
    </React.Fragment>
  );
}

function StartScr2({ navigation }) {
  return (
    <React.Fragment>
    <View style={[{flexDirection: 'column'}, {gap:20}]}>
      <View 
      style={styles.ImageContainer}>
        <Image
          source={require('./src/assets/images/hero.png')}
          style={styles.image} />
          
      </View >
      <View style={{marginLeft: 30}}>

      <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          Find
          </Text>
          <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          Your Perfect
          </Text>
          <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          Tickets To Fly
          </Text>

      </View>
      <View

      
        style={styles.ButtonContainer}>
        
        <TouchableOpacity 
          style={styles.buttonBack} 
          onPress={() => navigation.navigate("Opening 1")}>
            
          <Text style={{color: "black"}}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => navigation.navigate("Opening 3")}>
            
          <Text style={{color: "white"}} >Next</Text>

          <Image
              source={require('./src/assets/images/Vector.png')}
              style={styles.icon} />

        </TouchableOpacity>

        

      </View>
    </View>
    </React.Fragment>
  );
}

function StartScr3({ navigation }) {
  return (
    <React.Fragment>
    <View style={[{flexDirection: 'column'}, {gap: 20}]}>
      <View 
      style={styles.ImageContainer}>
        <Image
          source={require('./src/assets/images/Mask-group.png')}
          style={styles.image} />
          
      </View >
      <View style={{marginLeft: 30}}>

      <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          Book
          </Text>
          <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          Appoinment
          </Text>
          <Text style={[{fontWeight: '800'}, {fontSize: 40} , {color: "black"}]}>
          in Easiest Way!
          </Text>

      </View>
      <View

      
        style={styles.ButtonContainer}>
        
        <TouchableOpacity 
          style={styles.buttonBack} 
          onPress={() => navigation.navigate("Opening 2")}>
            
          <Text style={{color: "black"}}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonNext}
          onPress={() => navigation.navigate("Login")}>
            
          <Text style={{color: "white"}} >Get Started</Text>

          <Image
              source={require('./src/assets/images/Vector.png')}
              style={styles.icon} />

        </TouchableOpacity>

        

      </View>
    </View>
    </React.Fragment>

  );

}

function LoginScr ({ navigation }){
  return(
  
  <View style={[styles.ImageContainer, {gap: 70}, {marginTop: 150}] }>
    
    <View style={[styles.Login , {flexDirection: 'row'}]}>
      <Image 
        source={require('./src/assets/images/email.png')}
        style={styles.email}>
        
      </Image>
      <TextInput placeholder='Email'></TextInput> 
      

    </View>

    <View style={[styles.Login , {flexDirection: 'row'}]}> 
    <Image 
        source={require('./src/assets/images/Password.png')}
        style={styles.email}>
        
      </Image>
      <TextInput placeholder='Password'></TextInput> 
      

    </View>

    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
      <Text>Sign Up</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Opening 3")}>
      <Text>Back</Text> 
      </TouchableOpacity>
    
  </View>
  );
}

function SignUpScr ({navigation }){
  return(
    <View style={{flex:1}}>
    {/* Background gradient */}
    <LinearGradient
      colors={['#FFFFFF', '#40E0D0']}
      style={{flex:1}}
    >
      {/* Blur effect */}
      <BlurView
        style={styles.blurView}
        blurType="light"
        blurAmount={10}
      >
        {/* Content */}
        
      </BlurView>
    </LinearGradient>
  </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}>

        <Stack.Screen name="Opening 1" component={StartScr1} />

        <Stack.Screen name="Opening 2" component={StartScr2} />

        <Stack.Screen name="Opening 3" component={StartScr3} />

        <Stack.Screen name="Login" component={LoginScr} />

        <Stack.Screen name="SignUp" component={SignUpScr} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    gap:10,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
    borderRadius: 10,
    borderWidth: 2,
    
  },

  image: {
    width: 360,
    height: 400,
    resizeMode: 'cover', // or 'contain', 'stretch', 'repeat', 'center'
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    // You can apply more styles as needed
  },
  buttonNext: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00D2C5',
    color: "#fff",
    margin: 7,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 15,
  },

  buttonBack: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#fff",
    margin: 7,
    borderRadius: 10,

  },

  Login: {
    width: 327,
    height: 56,
    borderRadius: 500,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },

  email: {
    backgroundColor: '#fff',
    marginLeft: 10,
  },

  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


