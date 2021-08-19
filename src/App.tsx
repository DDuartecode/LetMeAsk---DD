import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Button } from './components/Button'
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

export const TestContext = createContext({} as any);

/*exact é um componet que especifica que só pode acessar a rota
se a rota digitada for exatamente a que está no atributo path*/
function App() {
  const [value, setValue] = useState('Teste');

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue }}>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
