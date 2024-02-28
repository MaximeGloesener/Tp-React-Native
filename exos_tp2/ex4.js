import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Image, Switch, StyleSheet } from 'react-native';

export default function TheLight() {
  const [isEnabled, setIsEnabled] = useState(false); // par défaut la lampe est éteinte

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image
        fadeDuration={0}
        source={isEnabled ? require('./assets/on.jpg') : require('./assets/off.jpg')}
        style={styles.image}
      />
      <Switch
        trackColor={{ false: '#fff', true: '#52d964' }}
        thumbColor={'#fff'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  switch: {
    marginTop: 20,
  },
});
