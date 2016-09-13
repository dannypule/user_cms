import React from 'react';
import styles from './scss/styles.scss';
import Users from './components/users/Users.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    let {users, metaInfo} = this.props

    return (
      <div className="app">
        <Users users="users" />
      </div>
    );
  }
}
