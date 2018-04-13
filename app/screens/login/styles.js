import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: '80%',
        height: 100
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        width: '80%',
        height: 50,
        marginTop: 20
    },
    username: {
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        fontFamily: 'sourcesanspro-bold'
    },
    password: {
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 18,
        fontFamily: 'sourcesanspro-bold'
    },
    buttonContainer: {
        width: '80%',
        height: 60,
        backgroundColor: '#A3C644',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },
    button: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'sourcesanspro-semibold'
    },
});