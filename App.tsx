/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WebView, {WebViewNavigation} from 'react-native-webview';

const App: React.FC = () => {
  const handleWebViewNavigationStateChange = (
    newNavState: WebViewNavigation,
  ) => {
    // Handle navigation state change if needed
    console.log(newNavState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{uri: 'https://rd.venturit.net'}} // Replace 'https://www.example.com' with your URL
        style={styles.webview}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
