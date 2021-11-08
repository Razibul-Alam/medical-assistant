


import HomeMain from './All-Pages/Home-Page/HomeMain/HomeMain'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './All-Pages/Home-Page/Header/Header';
import AppointmentMain from './All-Pages/Home-Page/AppointmentPage/AppointmentMain';
function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/home'>
<HomeMain/>
        </Route>
        <Route exact path='/appointment'>
<AppointmentMain/>
        </Route>
        <Route exact path ='/'>
        <HomeMain/>  
        </Route>
      </Switch>

    </Router>
   
  );
}

export default App;
