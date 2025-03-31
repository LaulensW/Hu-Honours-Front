import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, Button, Alert, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { create } from 'zustand' ;

import InputField from '@/components/InputField';

type AuthState = {
  token: string | null;
  setToken: (token: string) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token })
}));


export default function Inloggen() {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const router = useRouter();
      const setToken = useAuthStore((state) => state.setToken);
  
  
      const handleLogin = async () => {
          if (!email || !password) {
              Alert.alert("Foutmelding", "Je hebt nog niet alle velden ingevuld.");
              return;
          }
        
        try {
          const response = await fetch('', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
          });
          
          const data = await response.json();
          setToken(data.token);
          router.push('/(main)/dashboard');
        } 

        catch (error) {
          Alert.alert("Fout", "Kon geen verbinding maken met de server");
        }
    }

    return(
        <SafeAreaProvider >
          <View style={styles.container}>
            <Image
                style={styles.logoImage}
                source={require('@/assets/images/hu-honours-logo.png')}
            />
            <Text style={styles.headerText}>Inloggen</Text>
            <Text style={styles.baseText}>Log hier in met je account</Text>
            
            <View>
                <InputField
                    placeholder="Email" 
                    value={email} 
                    onChangeText={setEmail} 
                />
                <InputField
                    placeholder="Wachtwoord" 
                    value={password} 
                    secureTextEntry={true} 
                    onChangeText={setPassword}
                />
            </View>

            <Button
            onPress={handleLogin}
            title="Inloggen"
            />

            <Text style={[styles.linkText, styles.baseText]}>Nog geen account?
              <Link href="/aanmelden"> Aanmelden</Link>
            </Text>

          </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 47,
        paddingHorizontal: 24,
    },    
    logoImage: {
        width: '100%',
        height: 118,
        justifyContent: 'center',
    },
    headerText:{
        fontSize: 32,
        fontWeight: 700,
        color: '#F6F6F6',
        marginTop: 32,
        marginBottom: 8,
    },
    baseText: {
        fontSize: 16,
        fontWeight: 500,
        color: '#F6F6F6',
    },
    linkText: {
        textAlign: 'center',
        borderWidth: 2,
        marginTop: 32,
    },
    button:{
        borderRadius: 8,
    },
    inputField: {
        borderWidth: 3,
        borderColor: '#4D4D4D',
        borderRadius: 8,
        padding: 14,
        marginTop: 32,
        color: '#fff'
    }
});


