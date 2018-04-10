import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    close_container: {
        width: '100%',
        height: 100,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    close: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#CCCCCC',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actions_container: {
        width: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap'
    },
    action_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 20
    },
    action: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderWidth: 5,
        borderColor: '#CCCCCC',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    action_img: {
        width: 70,
        height: 70,
        tintColor: 'white'
    },
    action_text: {
        width: 100,
        height: 40,
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'sourcesanspro-regular'
    }
});
