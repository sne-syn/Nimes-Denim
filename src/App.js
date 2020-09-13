import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInUpPage from './pages/signpage/signInUpPage.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
