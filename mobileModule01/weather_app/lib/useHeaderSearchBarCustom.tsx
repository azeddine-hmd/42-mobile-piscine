import { useNavigation } from 'expo-router';
import * as React from 'react';
import { SearchBarProps } from 'react-native-screens';
import { useColorScheme } from './useColorScheme';
import { SearchInput } from '~/components/SearchInput';

export function useHeaderSearchBarCustom(props: SearchBarProps = {}) {
  const { colorScheme, colors } = useColorScheme();
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState<string | null>(null);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <SearchInput
          value={text}
          onChangeText={setText}
          onSubmitEditing={(e) => setSearch(e.nativeEvent.text)}
        />
      ),
    });
  }, [navigation, colorScheme, colors.foreground, colors.primary, colors.grey, props]);

  return search;
}
