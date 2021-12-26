import ThemeProvider from './context/theme';
import LangProvider from './context/lang';

import Title from './components/title';
import TitleChange from './components/titleChange';

import ThemeChange from './components/themeChange';

function App() {
  return (
    <div className="App">
      <ThemeProvider >
        <LangProvider >
          <div>
            <TitleChange />
            <Title />
          </div>

          <div>
            <ThemeChange />
          </div>
        </LangProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
