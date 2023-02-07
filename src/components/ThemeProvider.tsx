import React, { createContext, FC, ReactNode, useContext } from "react";

/**
 * e.g. {
 *    generic: {
 *      '--color-bg': 'blue',
 *      '--color-text': 'white'
 *    }
 *  }
 */
export interface ThemeContextValue {
  [key: string]: Record<string, string> | undefined;
  generic?: Record<string, string>;
}

export interface ThemeContextProps {
  children: Iterable<ReactNode>;
  value: ThemeContextValue;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider: FC<ThemeContextProps> = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeProvider = () => useContext(ThemeContext);
