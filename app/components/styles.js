import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const createStyles = () => {
    const theme = useTheme();
    const { background, border, accent } = theme.colors;

    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            alignItems: 'center',
            padding: 15,
            backgroundColor: background,
        },
        heading: {
            fontSize: 26,
            fontWeight: '700',
            marginBottom: 25,
            textAlign: 'center',
        },
        textInput: {
            height: 48,
            borderColor: border,
            borderWidth: 1.5,
            borderRadius: 8,
            paddingHorizontal: 12,
            marginBottom: 20,
        },
        linkToRegister: {
            marginTop: 20,
            textAlign: 'center',
            color: accent,
        },
    });
};

export default createStyles;
