import React from 'react';
import styles from './scss/styles.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    let {users, metaInfo} = this.props
    
    return (
      <div className="app">
        {users.map(user=>{
          return (
            <p key={user.id}>{user.name}</p>
          )
        })}
      </div>
    );
  }
}
