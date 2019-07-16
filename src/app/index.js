import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import '../stylesheets/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'App Wrapper'
    };
  }

  render() {
    return (
      <main>
        <Header />
        {this.props.children}
      </main>
    );
  }

}

App.propTypes = {
  children: PropTypes.node
};

export default App;
