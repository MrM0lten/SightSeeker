import { StatusBar } from 'expo-status-bar';
import { DefaultTheme,NavigationContainer} from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import i18n from './assets/translation/i18n';
import { AppStack } from './src/navigation/home/AppStack';
import { AuthStack } from './src/navigation/auth/AuthStack';

export default function App() {
  const isLoggedIn = true;

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgba(16, 16, 16, 1)',
      navigationBarHandleColor: '#0E0E0E'
    },
  };
  return (
    <I18nextProvider i18n={i18n}>
        <NavigationContainer theme={AppTheme} > 
        {/* <StatusBar barStyle="light-content" navigationBarHandleColor="#202020" backgroundColor="transparent" showHideTransition={true} translucent={true} /> */}
          { isLoggedIn ? <AppStack/> : <AuthStack/> }
        </NavigationContainer>
    </I18nextProvider>
  );
}

// linking={linking} for linking later