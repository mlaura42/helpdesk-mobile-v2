import {
    useLocalSearchParams,
    useRouter
} from 'expo-router';

import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetalhesChamado() {

    // Navegação
    const router = useRouter();

    // Receber parâmetros da rota
    const {
        id,
        titulo,
        descricao,
        status
    } = useLocalSearchParams<{
        id: string;
        titulo?: string;
        descricao?: string;
        status?: string;
    }>();


    // Voltar para a tela anterior
    function voltar() {

        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/navegacao');
        }
    }


    return (

        <SafeAreaView
            style={styles.container}
            edges={['left', 'right', 'bottom']}
        >

            <ScrollView contentContainerStyle={styles.conteudo}>

                <View style={styles.cartao}>

                    <Text style={styles.identificador}>
                        Chamado #{id}
                    </Text>

                    <Text style={styles.rotulo}>
                        Título
                    </Text>

                    <Text style={styles.valor}>
                        {titulo ?? 'Título não informado'}
                    </Text>

                    <Text style={styles.rotulo}>
                        Descrição
                    </Text>

                    <Text style={styles.valor}>
                        {descricao ?? 'Descrição não disponível'}
                    </Text>

                    <Text style={styles.rotulo}>
                        Situação
                    </Text>

                    <Text
                        style={[
                            styles.status,
                            status === 'CONCLUIDO'
                                ? styles.concluido
                                : styles.aberto
                        ]}
                    >
                        {status ?? 'Não informado'}
                    </Text>

                    {!titulo && (
                        <Text style={styles.aviso}>
                            Os dados completos não foram recebidos.
                            Abra o chamado pela tela principal.
                        </Text>
                    )}

                    <Pressable
                        style={styles.botaoVoltar}
                        onPress={voltar}
                    >

                        <Text style={styles.textoBotao}>
                            Voltar para os chamados
                        </Text>

                    </Pressable>

                </View>

            </ScrollView>

        </SafeAreaView>

    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F5F7FA'
    },

    conteudo: {
        padding: 16,
        paddingBottom: 32
    },

    cartao: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DDDDDD'
    },

    identificador: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#12355B',
        marginBottom: 24
    },

    rotulo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#777777',
        marginBottom: 5
    },

    valor: {
        fontSize: 16,
        color: '#222222',
        marginBottom: 22
    },

    status: {
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: 8,
        fontWeight: 'bold',
        marginBottom: 25,
        overflow: 'hidden'
    },

    aberto: {
        backgroundColor: '#FFF1D6',
        color: '#855700'
    },

    concluido: {
        backgroundColor: '#D9F3E5',
        color: '#17653B'
    },

    aviso: {
        color: '#A44B00',
        marginBottom: 18
    },

    botaoVoltar: {
        backgroundColor: '#12355B',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center'
    },

    textoBotao: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }

});