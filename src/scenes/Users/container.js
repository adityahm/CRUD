import {connect} from 'react-redux'
import UsersComponent from './component'
import {fetchUsersTry} from './actions'

const mapStateToProps = state => ({
  users: state.users.data
})

const mapDispatchToProps = {
  fetchUsersTry
}

const Users = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)

export default Users

