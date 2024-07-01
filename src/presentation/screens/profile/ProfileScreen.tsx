import React from 'react';
import {View, Text, Pressable} from 'react-native';

import {styles} from '../../theme/app.theme';
import {useProfileStore} from '../../store/profile.store';

const ProfileScreen = () => {
  const name = useProfileStore(store => store.name);
  const email = useProfileStore(store => store.email);
  const changeProfile = useProfileStore(store => store.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>name: {name}</Text>
      <Text style={styles.title}>email: {email}</Text>

      <Pressable
        onPress={() => useProfileStore.setState({name: 'Zustand User'})}
        style={styles.primaryButton}>
        <Text>Change name</Text>
      </Pressable>

      <Pressable
        onPress={() => useProfileStore.setState({email: 'zustand@google.com'})}
        style={styles.primaryButton}>
        <Text>Change email</Text>
      </Pressable>

      <Pressable
        onPress={() => changeProfile('Juan Pablo', 'juanpablo@google.com')}
        style={styles.primaryButton}>
        <Text>Come back Juan Pablo!</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
