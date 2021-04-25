import { createContext, useState } from 'react';
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const colors = {
    bg: darkTheme ? '#0A0A0A' : '#FFFBEF',
    font: darkTheme ? 'white' : 'black',
    header: darkTheme ? '#F30072' : '#FF6700',
  };
  const changeTheme = () => setDarkTheme(t => !t);
  return (
    <ThemeContext.Provider value={{ darkTheme, changeTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
