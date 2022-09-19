import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meu Perfil</Text>
      <Icon
        name="arrow-left"
        size={20}
        color="#fff"
        onPress={() => navigation.goBack()}
      />
      <Icon name="power" size={20} color="#fff" onPress={() => signOut()} />
    </View>
  );
};

export default Profile;
