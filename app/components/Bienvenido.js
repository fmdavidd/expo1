import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from 'react-native-paper';
import useStyles from './styles';

const Bienvenido = ({ navigation }) => {
    const styles = useStyles(); 
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.primary }]}>¡Bienvenido!</Text>
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>
                Has iniciado sesión exitosamente.
            </Text>
            <Button title="Cerrar Sesión" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default Bienvenido;