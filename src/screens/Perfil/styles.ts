import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background for better readability
        borderRadius: 10,
        margin: 10,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: colors.principal,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    linksContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    redes: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
    },
    socials: {
        flexDirection: 'row',
        marginTop: 10,
    },
    iconContainer: {
        marginHorizontal: 10,
    },
    signOutButton: {
        marginTop: 30,
    },
});
