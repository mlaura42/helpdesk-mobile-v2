
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function Sobre() {

    return (
        <SafeAreaView
            style={styles.container}
            edges={['left', 'right', 'bottom']}
        >

            <View style={styles.cartao}>

                <Text style={styles.titulo}>
                    Sobre o Helpdesk
                </Text>

                <Text style={styles.texto}>
                    Aplicativo de gerenciamento de chamados
                    técnicos desenvolvido com React Native,
                    Expo Router e TypeScript.
                </Text>

                <Text style={styles.subtitulo}>
                    Funcionalidades
                </Text>

                <Text style={styles.texto}>
                    Cadastro de chamados, listagem,
                    alteração de status e visualização
                    de detalhes.
                </Text>

                <Text style={styles.versao}>
                    Versão 1.0
                </Text>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        padding: 16
    },

    cartao: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 13
    },

    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#12355B',
        marginBottom: 16
    },

    subtitulo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#12355B',
        marginTop: 18,
        marginBottom: 8
    },

    texto: {
        fontSize: 15,
        lineHeight: 23,
        color: '#444444'
    },

    versao: {
        marginTop: 24,
        color: '#777777'
    }

});
