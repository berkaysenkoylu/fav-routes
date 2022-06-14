import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: 'blue',
        paddingVertical: 8,
        paddingHorizontal: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        borderRadius: 8
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center'
    },
    buttonPressed: {
        opacity: 0.4
    },
    iconButtonContainer: {}
});

