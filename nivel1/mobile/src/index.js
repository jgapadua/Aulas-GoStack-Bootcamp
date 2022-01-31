import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar} from 'react-native';

import api from './services/api';

// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Todos os componentes possuem por padrão "display: flex"

// View ⇒ div, footer, header, main, aside, section
// Text ⇒ p, span, strong, h1, h2, h3
// ScrollView => View com scroll,  quando não estamos  expecificamente lidando com listas .
//FlatList => Componente performático para listas dentro do React Native.
// Não tem diferença visual entre a ScrollView e  FlatList, tiver uma lista muito grande a FlatList vai performar muito melhor, só mostra em tela o que tá visivel, tudo que não esta visivel em tela não renderiza por baixo dos panos.
//SafeAreaView => Aréa segura da aplicação para ser exibido algum tipo de contéudo. Para que os dados não fiquem "vazando" abaixo da barra de status (principalmente no iOS), adicionamos o SafeAreaView.

export default function  App(){
  const [projects, setProjects] = useState([ ]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);
  
  return  (
    <>
    <StatusBar  barStyle='light-content' backgroundColor= '#7159c1'   />

    <SafeAreaView style={styles.container}>
    <FlatList
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.project}>{project.title}</Text>
        )}
    />
    </SafeAreaView>
    </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project:{
    color: '#FFF',
    fontSize: 30,
  },
});