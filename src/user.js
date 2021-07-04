import React, { Component } from 'react';
import Login from './other/Login'
import Register from './other/Register'
import { NavLink,Route, Link} from 'react-router-dom'
class User extends Component {
  render() {
    return (
      <div>

        <Link to={

          {
            pathname: "/list/1",
            search: '?a=1&b=2&c=3',
            state: {
              title: '商品列表,商品1',
            }
          }
        }>商品1</Link>
        <Link to={

{
  pathname: "/list/2",
  search: '?a=1&b=2&c=3',
  state: {
    title: '商品列表,商品2',
  }
}
}>商品2</Link>
        <Link to={

{
  pathname: "/list/3",
  search: '?a=1&b=2&c=3',
  state: {
    title: '商品列表,商品3',
  }
}
}>商品3</Link>
        geren
        <NavLink to="/user/login">登陆</NavLink>
        <NavLink to="/user/register">注册</NavLink>
        <Route path="/user/login" component={Login} ></Route>
        <Route path="/user/register" component={ Register}></Route>

      </div>
    );
  }
}

export default User;