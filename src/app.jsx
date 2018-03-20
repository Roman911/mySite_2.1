import * as React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { NavbarComponent } from './scripts/components/navbar/navbar.component.jsx';
import { ScrollButton } from './scripts/components/scrollingUp/scrollingUp.jsx';
import { HomePage } from './scripts/components/home/home.jsx';
import { Footer } from './scripts/components/footer/footer.jsx';
import { Gallery } from './scripts/components/gallery/gallery.jsx';
import { About } from './scripts/components/about/about.jsx';
import { Contacts } from './scripts/components/contacts/contacts.jsx';

import './styles.styl';

ReactDOM.render(<div>
  <Router>
    <div className='page-wrapper'>
      <NavbarComponent />
      <Switch>
        <Route path='/home' render={() => <HomePage/>}/>
        <Route path='/gallery' render={() => <Gallery/>}/>
        <Route path='/about' render={() => <About/>}/>
        <Route path='/contacts' render={() => <Contacts/>}/>
        <Redirect path='/' to='/home'/>
      </Switch>
      <Footer/>
      < ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </div>
  </Router>
</div>, document.getElementById('page'));