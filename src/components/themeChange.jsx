import { useContext } from 'react';
import { themeContext } from '../context/theme';

const ThemeChange = () => {
  const theme = useContext(themeContext);

  return  (
    <button 
      onClick={theme.onChange}
      style={{
        backgroundColor: theme.primary,
        border: 0,
        borderRadius: 5,
        padding: 12,
      }}
    >{theme.mode}</button>
  )
}

export default ThemeChange;