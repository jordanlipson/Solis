import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LandingScreen from './screens/LandingScreen';
import SignupScreen from './screens/SignupScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [page, setPage] = useState("landing");

  let toSignup = () => {
    setPage("signup");
  }

  let toApp = () => {
    setPage("app");
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {
          page == "landing"
            ? <LandingScreen toSignup={toSignup} />
            : page == "signup"
             ? <SignupScreen toApp={toApp} />
             : <Navigation colorScheme={colorScheme} />
        }
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
