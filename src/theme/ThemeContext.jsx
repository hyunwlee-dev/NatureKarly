import { createContext, useContext } from 'react';

import { tokens } from './tokens';

const ThemeContext = createContext(tokens);

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new ReferenceError(
      'useTheme은 ThemeContext 내부에서만 사용해야 합니다.'
    );
  }

  return theme;
}
