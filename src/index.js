import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './pages/layouts'
import LeadIndex from './pages/lead'
import ProcessingIndex from './pages/processing'
import Login from './pages/layouts/components/Login'
import './assets/styles/style.css';
import AppContext from './context';
import OrderIndex from './pages/order';
import CalendarIndex from './pages/calendar';
import CustomerIndex from './pages/customer';
import ServiceIndex from './pages/service';
import UserIndex from './pages/user';
import Signup from './pages/layouts/components/Signup';
import CustomRoute from './components/CustomRoute';





const titleData = [
  {
    path: '/lead', component: LeadIndex
  },
  {
    path: '/processing', component: ProcessingIndex
  },
  {
    path: '/order', component: OrderIndex
  },
  {
    path: '/calendar', component: CalendarIndex
  },
  {
    path: '/customer', component: CustomerIndex
  },
  {
    path: '/service', component: ServiceIndex
  },
  {
    path: '/user', component: UserIndex
  },
]

function App() {
  const [title, setTitle] = useState();
  const [activeMenu, setActiveMenu] = useState();
  return (
    <AppContext.Provider value={{ title, setTitle: (value) => setTitle(value), activeMenu, setActiveMenu }}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <CustomRoute path='/'>
            <MainLayout>
              {titleData.map((item, i) => {
                return (
                  <Route exact path={item.path} key={i} component={item.component} />
                )
              })}
            </MainLayout>
          </CustomRoute>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
