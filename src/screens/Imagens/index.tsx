import { useState } from "react";
import { ScrollView, View, Image, ImageBackground } from "react-native";
import { styleContainer} from "../../styles/globalstyle"
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles'
import { Album, ComponentButtonInterface } from '../../components';

export function Imagens() {
    const Fundo = require('../../asset/fundo2.png')
    const [albums, setAlbums] = useState<MediaLibrary.Album[] | null>(null);
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [image, setImage] = useState<string | null>(null);

    async function getAlbums() {
        if (permissionResponse && permissionResponse.status !== 'granted' && permissionResponse.accessPrivileges !== "all") {
            await requestPermission();
        }
        const fetchedAlbums = await MediaLibrary.getAlbumsAsync({
            includeSmartAlbums: true,
        });
        setAlbums(fetchedAlbums);
    }
    
    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    return (
        <>
       <ImageBackground source={Fundo} style={styleContainer.container}>
            <ComponentButtonInterface onPressI={pickImage} title='Abrir Imegem' type='secondary' />
            <View style={styles.containerImage}>
                {image && <Image source={{ uri: image }} style={styles.image} />}
            </View>
            <ComponentButtonInterface onPressI={getAlbums} title='Buscar Albuns' type='primary' />
            <ScrollView>
                {albums && albums.map((album) => <Album album={album} />)}
            </ScrollView>
            </ImageBackground>
        </>
    );
}