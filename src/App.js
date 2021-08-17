import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import Login from './components/Login';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ManageChanceView from './components/ManageChanceView';

const titleData = [
  {
    path: '/lead', component: ManageChanceView
  },
  {
    path: '/processing',
  },
  {
    path: '/order',
  },
  {
    path: '/calendar',
  },
  {
    path: '/customer',
  },
  {
    path: '/service',
  },
  {
    path: '/user',
  },
]

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/'>
          <MainLayout titleData={titleData}>
            {titleData.map((item) => {
              return (
                <Route exact path={item.path} component={item.component} />
              )
            })
            }
          </MainLayout>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
