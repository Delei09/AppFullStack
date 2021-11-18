
import { Switch , Route  } from 'react-router'
import Cadastrar from './views/cadastro'
import Dashboard from './views/dashboard'
import Login from './views/login'


const Rotas = () => {

    return(
        <Switch >
              <Route  exact path = '/'>
                  <Login />
              </Route>
            <Route path = '/cadastrar' >
                    <Cadastrar />
            </Route> 
            <Route path = '/dashboard' >
                    <Dashboard />
            </Route> 
       </Switch>
    )
}

export default Rotas