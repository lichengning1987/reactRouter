import React, { Component } from 'react';

class Tab extends Component {
  render () {
    const { title } = this.props;
    console.log(this.props, 3344);
    return (
      <div className="tab" style={{background:'red'}}>
        first
        {title}
      </div>
    );
  }
}

export default Tab;