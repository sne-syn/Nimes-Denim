import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInUpPage from './pages/signpage/signInUpPage.component';

function App() {
  return (
    <div className='content'>
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInUpPage} />
          </Switch>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default App;
