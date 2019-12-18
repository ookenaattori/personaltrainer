import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListTrainings from './components/ListTrainings';
import ListCustomers from './components/ListCustomers';
import Calendar from './components/Calendar';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navigator from './components/Navigator';
import { BrowserRouter, Switch, Route} from 'react-router-dom'



function App() {


  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
     
          <Typography variant="h4">
            Personal trainer app
          </Typography>

         
        </Toolbar>
      </AppBar>
      <BrowserRouter>
     <div>
       <Navigator />
       <Switch>
     <Route exact path="/" component={ListTrainings}/>
     <Route path="/ListCustomers" component={ListCustomers}/>
     <Route path="/Calendar" component={Calendar}/>
     <Route render= { () => <h1>Page not found</h1>} />
     </Switch>
     </div>
     </BrowserRouter>

     
    </div>
  );
}

export default App;
