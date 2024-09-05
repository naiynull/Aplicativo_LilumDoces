import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { styleContainer} from "../../../styles/globalstyle"
import { styles } from "./styled"
import { MenuTabTypes } from "../../../navigations/MenuBottomtab.navigation";
import { useAuth } from "../../../hook/auth";
import { ComponentButtonInterface } from "../../../components"

export function ConeReachado({ navigation }: MenuTabTypes) {
    const Fundo = require('../../../asset/fundo2.png')
    const { user, signOut } = useAuth()
    return (
        <ImageBackground source={Fundo} style={styleContainer.container}>
            <View style={styleContainer.container}>
           
       
        
            </View>
        </ImageBackground>
    )
}