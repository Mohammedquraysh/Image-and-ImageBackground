import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <ImageBackground
    source={require('./assets/octanile.png')}
     style={styles.container}>
      <Image
      style={styles.image}
      resizeMode='stretch'
     // blurRadius={10}
        source={require('./assets/octamile.png')}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 100,
    height:100
  }
});
