import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    textColor: 'black',
    backgroundColor: 'white',
  });

  const updateTheme = (textColor, backgroundColor) => {
    setTheme({ textColor, backgroundColor });
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };