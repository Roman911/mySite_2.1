import * as React from 'react';// eslint-disable-line
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Route, NavLink, Switch, HashRouter as Router } from 'react-router-dom';
import { NavbarComponent } from './scripts/components/navbar/navbar.component.jsx';
import { TaskListComponent } from './scripts/components/taskList/taskList.component.jsx';
import { CatalogComponent } from './scripts/components/catalog/catalog.component.jsx';
import { HomePage } from './scripts/components/Home/Home.jsx';
import { Footer } from './scripts/components/footer/footer.jsx';

import './styles.styl';

ReactDOM.render(<div>
  <Router>
    <div className='page-wrapper'>
      <NavbarComponent />
      <Switch>
        <Route path='/Home' render={() => <HomePage/>}/>
        <Route path='/taskList' render={() => <TaskListComponent/>}/>
        <Route path='/contacts' render={() => <h1>Contacts</h1>}/>
        <Route path='/contacts2' render={() => <h1>Contacts2</h1>}/>
        <Route path='/catalog' render={() => <CatalogComponent />}/>
        <Redirect path='/' to='/Home'/>
      </Switch>
      <Footer/>
    </div>
  </Router>
</div>, document.getElementById('taskList'));