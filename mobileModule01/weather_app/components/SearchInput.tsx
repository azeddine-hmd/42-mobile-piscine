import { useRef, useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View, TextInputProps, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useColorScheme } from '~/lib/useColorScheme';

export function SearchInput({
  value,
  onChangeText,
  onFocus,
  onBlur,
  ...props
}: TextInputProps & { value: string; onChangeText: (text: string) => void }) {
  const { colors } = useColorScheme();
  const inputRef = useRef<TextInput>(null);
  const [inputFocused, setInputFocus] = useState(false);

  const onCloseInput = () => {
    onChangeText('');
    inputRef.current?.blur();
    Keyboard.dismiss();
  };

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      if (inputRef.current?.isFocused()) {
        inputRef.current?.blur();
      }
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View className="relative">
      <TextInput
        ref={inputRef}
        className="w-full rounded-md border border-input bg-background py-2 pl-3 pr-8 text-foreground text-primary placeholder:text-muted-foreground focus:border-primary"
        placeholder="Search location..."
        value={value}
        onChangeText={onChangeText}
        onFocus={(e) => {
          setInputFocus(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setInputFocus(false);
          onBlur?.(e);
        }}
        {...props}
      />
      {value.length > 0 && inputFocused && (
        <TouchableOpacity
          className="bg-foreground/20 absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1"
          onPress={onCloseInput}>
          <Ionicons color={colors.foreground} size={12} name="close" />
        </TouchableOpacity>
      )}
    </View>
  );
}
