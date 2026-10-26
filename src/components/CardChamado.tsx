import {
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';

import type { Chamado } from '../models/Chamado';

type PropriedadesCardChamado = {
    chamado: Chamado;
    aoVerDetalhes: () => void;
    aoAlterarStatus: () => void;
};

export default function CardChamado({
    chamado,
    aoVerDetalhes,
    aoAlterarStatus
}: PropriedadesCardChamado) {

    return (
        <View style={styles.cartao}>

            <Text style={styles.titulo}>
                {chamado.titulo}
            </Text>

            <Text
                style={styles.descricao}
                numberOfLines={2}
            >
                {chamado.descricao}
            </Text>

            <Text
                style={[
                    styles.status,
                    chamado.status === 'ABERTO'
                        ? styles.aberto
                        : styles.concluido
                ]}
            >
                {chamado.status}
            </Text>

            <View style={styles.acoes}>

                <Pressable
                    style={styles.botaoDetalhes}
                    onPress={aoVerDetalhes}
                >
                    <Text style={styles.textoDetalhes}>
                        Ver detalhes
                    </Text>
                </Pressable>

                <Pressable
                    style={styles.botaoStatus}
                    onPress={aoAlterarStatus}
                >
                    <Text style={styles.textoStatus}>
                        {chamado.status === 'ABERTO'
                            ? 'Concluir'
                            : 'Reabrir'}
                    </Text>
                </Pressable>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    cartao: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#DDDDDD'
    },

    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#12355B',
        marginBottom: 8
    },

    descricao: {
        fontSize: 14,
        color: '#444444',
        marginBottom: 12
    },

    status: {
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 6,
        marginBottom: 12,
        overflow: 'hidden',
        fontWeight: 'bold'
    },

    aberto: {
        backgroundColor: '#FFF1D6',
        color: '#855700'
    },

    concluido: {
        backgroundColor: '#D9F3E5',
        color: '#17653B'
    },

    acoes: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },

    botaoDetalhes: {
        backgroundColor: '#12355B',
        padding: 12,
        borderRadius: 8
    },

    textoDetalhes: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },

    botaoStatus: {
        borderWidth: 1,
        borderColor: '#12355B',
        padding: 11,
        borderRadius: 8
    },

    textoStatus: {
        color: '#12355B',
        fontWeight: 'bold'
    }

});