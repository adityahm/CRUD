import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';
import { store } from '../index';
import urlMetaData from '../data/pageTitle.json';
import '../stylesheets/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authTokens: JSON.parse(localStorage.getItem('tokens')) || '',
      user: JSON.parse(localStorage.getItem('user')) || {}
    };
  }

  componentDidMount() {
    const { authTokens, user } = this.state;
    if (authTokens) {
      store.dispatch({
        type: 'SET_AUTHENTICATION',
        data: { token: authTokens, user }
      });
    }
  }

  setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data.token));
    localStorage.setItem('user', JSON.stringify(data.user));
    this.setState({
      authTokens: data.token,
      user: data.user
    });
  };

  render() {
    const { authTokens, user } = this.state;
    const { location } = this.props;
    const url = location.pathname;

    return (
      <AuthContext.Provider
        value={{ authTokens, user, setAuthTokens: this.setTokens }}
      >
        <main>
          {url !== '/login' && <Header />}
          <div id="main-content" className="content">
            {urlMetaData[url] && <h2>{urlMetaData[url].title}</h2>}
            {this.props.children}
          </div>
        </main>
      </AuthContext.Provider>
    );
  }

}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default App;
