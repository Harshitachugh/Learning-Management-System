import Footer from './Footer';
import { Home } from '../Pages/Home'
import Login from '../Pages/Login'
import Registration from '../Pages/Registration'
import {Header} from './Header';
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="Main">
      <Header />
      <br/>
      <Switch>
        < Route exact path='/' component={Home} />
        < Route exact path='/Login' component={Login} />
        < Route exact path='/Login/Registration' component={Registration} />
      </Switch>
      {/*<Home/>*/}
      <Footer />
      {/*<Login />
        <Registration />*/}
    </div>
    );
  }
  
export default App;