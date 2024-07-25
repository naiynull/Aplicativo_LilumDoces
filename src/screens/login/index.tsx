
import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, Alert} from 'react-native';
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { styleContainer } from "../../styles/globalstyle";
import { styles } from "./styled"
import { colors } from "../../styles/colors";
import { ComponentButtonInterface } from '../../components';
import { LoginTypes } from '../../navigations/login.navigation';


export interface IAuthenticate {
    email?: string;
    password?: string;
}
export function Login({ navigation }: LoginTypes){
    const login = require('../../asset/login.png')
    const [data, setData] = useState<IAuthenticate>();
    async function handSingIn(){
        if (data?.email && data.password){
            console.log(data)
        } else {
            Alert.alert("Preencha todos os campos!!!");
        }
    }
    function handleRegister(){
        navigation.navigate("Register")
    }
    function handleChange(item: IAuthenticate){
        setData({...data, ...item});
    }
   
    return(
        <ImageBackground source={login} style={styleContainer.container}>
        <View style={styles.container}>
         <KeyboardAvoidingView>
            <Text style={styles.title}>Please Sing In</Text>
            <View style={styles.formRow}>
                <MaterialIcons name="email" style={styles.icon} />
                <TextInput
                placeholderTextColor={colors.principal}
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(i) => handleChange ({ email: i})}
                />
            </View>
            <View style={styles.formRow}>
                <Entypo name="key" style={styles.icon}/>
                <TextInput
                placeholderTextColor={colors.principal}
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(i) => handleChange ({ password: i})}
                />
            </View>
            <ComponentButtonInterface title='Login' type='primary' onPressI={handSingIn} />
            <ComponentButtonInterface title='Cadastre-se' type='secondary' onPressI={handleRegister} />
         </KeyboardAvoidingView>
         </View>
      
         </ImageBackground>
    );
        
}
