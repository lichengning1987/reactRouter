import React, { Component } from 'react';
import { getCookie } from '../../utils'
import routes from '../../router/routes'
const root = getCookie('root')

class index extends Component {
  render () {
    const { location: { pathname } } = this.props;
    const flag = routes.some(item => item.path == pathname)
    if (flag && root == 'user') {
      return <div>权限不够无法进入</div>
    }
    return (
      <div>
          404
      </div>
    );
  }
}

export default index;