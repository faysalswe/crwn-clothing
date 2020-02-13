import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Checkout from './pages/checkout/checkout.component';
import CurrentUserContext from "./context/current-user/current-user";

class App extends React.Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapShot => {
          this.setState({currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }})
        })  
      }
      this.setState({currentUser: userAuth});
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
    
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={
                () => this.state.currentUser 
                ?
                (<Redirect to="/" />)
                :
                (<SignInAndSignUp />)
              }
            />
        </Switch>
      </div>
    );
  }
}
export default App;
