import React, { Component } from 'react';
import qs from 'querystring';
class Index extends Component {
  render () {
    const { location: { pathname, search, state: { title } } } = this.props;
    const { match: { params: { id } } } = this.props;
    console.log(qs.parse(search.slice(1)), this.props,88)
    const { a,b,c} = qs.parse(search.slice(1))
    return (
      <div>
        <p>路由路径：{ pathname}</p>
        <p>search:{search} {a} {b} { c}</p>
        <p>state数据：{ title }</p>
        <p>路由路径id： { id}</p>
      </div>
    );
  }
}

export default Index;