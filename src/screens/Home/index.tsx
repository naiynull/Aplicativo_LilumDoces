import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { styleContainer} from "../../styles/globalstyle"
import { styles } from "./styled"
import { MenuTabTypes } from "../../navigations/MenuBottomtab.navigation";

export function Home({ navigation }: MenuTabTypes) {
    const Fundo = require('../../asset/fundo.png')
   
    return (
        <ImageBackground source={Fundo} style={styleContainer.container}>
            <View style={styleContainer.container}>
            </View>
        </ImageBackground>
    )
}