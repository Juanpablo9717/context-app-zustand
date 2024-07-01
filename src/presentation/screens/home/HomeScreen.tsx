import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../../theme/app.theme';
import {useProfileStore} from '../../store/profile.store';
import {useCounterStore} from '../../store/counter.store';

const HomeScreen = () => {
  const name = useProfileStore(store => store.name);
  const email = useProfileStore(store => store.email);

  const count = useCounterStore(state => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count {count}</Text>

      <Text style={styles.title}>name: {name}</Text>
      <Text style={styles.title}>email: {email}</Text>
    </View>
  );
};

export default HomeScreen;
