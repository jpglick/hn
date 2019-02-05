import React, {Component} from 'react';

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconClass: props.iconClass
    }

  }


  render() {
    return (
      <i className={this.state.iconClass} onClick={this.handleIconClick}></i>
    );
  }
}

export default Icon;
