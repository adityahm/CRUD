import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table';

class UsersComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'User List'
    };
  }

  componentDidMount() {
    this.props.fetchUsersTry();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <Table
          headers={['Name', 'Email']}
          columns={['name', 'email']}
          data={users}
          hasSerialNo
        />
      </div>
    );
  }

}

UsersComponent.propTypes = {
  fetchUsersTry: PropTypes.func,
  users: PropTypes.array
};

export default UsersComponent;
