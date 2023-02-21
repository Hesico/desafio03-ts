import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import {GlobalStyle, Box} from './globalStyles';
import Conta from './pages/Conta';
import Home from './pages/Home';

interface IAppContext {
  user: string
}

export const AppContext = createContext({} as IAppContext);

const AppContextProvider = ({children} : any) => {
  const user = "Henrique";

  return (
    <AppContext.Provider value={{user}}>
      {children}
    </AppContext.Provider>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <Header/>
          <Box>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/conta/:id" element={<Conta/>}/>
            </Routes>
          </Box>
        </AppContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}
export default App;