import React from 'react';

class HomeComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Home'
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }

}
export default HomeComponent;
