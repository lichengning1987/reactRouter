import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navs: [
        {
          id: 1,
          path: '/home',
          text:'首页'
        },
        {
          id: 2,
          path: '/user',
          text:'个人中心'
        },
        {
          id: 3,
          path: '/activity',
          text:'活动页'
        }
      ]
    }
  }
  renderNavs = () => {
    const { navs } = this.state;
    return navs.map(item => <li key={item.id} >
      <NavLink to={item.path} activeClassName="nav_active">{ item.text}</NavLink>
    </li>)
  }
  render () {
    return (
      <div>
        <ul>
          {
            this.renderNavs()
          }
         </ul>
      </div>
    );
  }
}

export default TabBar;