
import { useRouter } from 'expo-router';
import { useState } from 'react';

import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import CardChamado from '../../components/CardChamado';

import type {
  Chamado,
  StatusChamado
} from '../../models/Chamado';

export default function Index() {

  const router = useRouter();

  // Estados do formulário
  const [titulo, setTitulo] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');
  const [mensagemErro, setMensagemErro] =
    useState<string>('');

  // Lista de chamados
  const [chamados, setChamados] =
    useState<Chamado[]>([]);

  // Cadastrar um chamado
  function cadastrarChamado() {

    if (titulo.trim() === '') {
      setMensagemErro('Informe o título do chamado.');
      return;
    }

    if (descricao.trim() === '') {
      setMensagemErro('Informe a descrição do chamado.');
      return;
    }

    const novoChamado: Chamado = {
      id: String(Date.now()),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      status: 'ABERTO'
    };

    setChamados((chamadosAtuais) => [
      ...chamadosAtuais,
      novoChamado
    ]);

    setTitulo('');
    setDescricao('');
    setMensagemErro('');
  }

  // Concluir ou reabrir um chamado
  function alterarStatus(id: string) {

    setChamados((chamadosAtuais) =>
      chamadosAtuais.map((chamado): Chamado => {

        if (chamado.id !== id) {
          return chamado;
        }

        const novoStatus: StatusChamado =
          chamado.status === 'ABERTO'
            ? 'CONCLUIDO'
            : 'ABERTO';

        return {
          ...chamado,
          status: novoStatus
        };
      })
    );
  }

  // Navegar para os detalhes
  function abrirDetalhes(chamado: Chamado) {

    router.push({
      pathname: '/chamados/[id]',
      params: {
        id: chamado.id,
        titulo: chamado.titulo,
        descricao: chamado.descricao,
        status: chamado.status
      }
    });
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={['left', 'right', 'bottom']}
    >

      <FlatList
        data={chamados}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.conteudo}

        ListHeaderComponent={
          <View style={styles.formulario}>

            <Text style={styles.tituloPagina}>
              Gerenciamento de chamados
            </Text>

            <Text style={styles.subtitulo}>
              Novo chamado
            </Text>

            <TextInput
              style={styles.campo}
              placeholder="Título do chamado"
              value={titulo}
              onChangeText={setTitulo}
            />

            <TextInput
              style={[
                styles.campo,
                styles.campoDescricao
              ]}
              placeholder="Descrição do problema"
              multiline
              textAlignVertical="top"
              value={descricao}
              onChangeText={setDescricao}
            />

            {mensagemErro !== '' && (
              <Text style={styles.mensagemErro}>
                {mensagemErro}
              </Text>
            )}

            <Pressable
              style={styles.botaoCadastrar}
              onPress={cadastrarChamado}
            >
              <Text style={styles.textoBotaoCadastrar}>
                Cadastrar chamado
              </Text>
            </Pressable>

            <Text style={styles.tituloLista}>
              Chamados cadastrados ({chamados.length})
            </Text>

          </View>
        }

        renderItem={({ item }) => (
          <CardChamado
            chamado={item}
            aoVerDetalhes={() => abrirDetalhes(item)}
            aoAlterarStatus={() => alterarStatus(item.id)}
          />
        )}

        ListEmptyComponent={
          <Text style={styles.listaVazia}>
            Nenhum chamado cadastrado.
          </Text>
        }
      />

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

  formulario: {
    marginBottom: 14
  },

  tituloPagina: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#12355B',
    marginBottom: 20
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },

  campo: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    marginBottom: 12
  },

  campoDescricao: {
    minHeight: 90
  },

  mensagemErro: {
    color: '#B00020',
    marginBottom: 12
  },

  botaoCadastrar: {
    backgroundColor: '#12355B',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center'
  },

  textoBotaoCadastrar: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  tituloLista: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#12355B',
    marginTop: 25
  },

  listaVazia: {
    color: '#777777',
    textAlign: 'center',
    marginTop: 20
  }

});
