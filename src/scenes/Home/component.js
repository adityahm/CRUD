import React from 'react';
import { AuthContext } from '../../context/auth';

class HomeComponent extends React.Component {

  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      name: 'Home'
    };
  }

  render() {
    const { user } = this.context;
    return <div> Welcome {user.name} !!!</div>;
  }

}

export default HomeComponent;
