import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';


import { AuthContextProvider } from './contexts/AuthContext';



/*exact é um componente que especifica que só pode acessar a rota
se a rota digitada for exatamente a que está no atributo path*/
/*{Componente Switch} não deixa chamar mais de uma rota ao mesmo tempo*/
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
