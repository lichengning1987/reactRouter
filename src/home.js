import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TabBar from './components/TabBar'
class Home extends Component {
  render () {
    const { history: { go,push,replace}} = this.props
    return (
      <div>
       <Link to="/user">gerenzhongxin</Link>
        home
        <button onClick={() => { go(-1)}}>home</button>
        <button onClick={() => { push('/user') }}>geren</button>
      </div>
    );
  }
}

export default Home;