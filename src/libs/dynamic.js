import React from 'react';

export default class extends React.Component {
  state = {
    component: null,
  }

  componentDidMount() {
    const { load } = this.props;
    load().then(component => {
      this.setState({
        component: component.default ? component.default : component
      });
    });
  }

  render() {
    const { component } = this.state;
    return component ? React.createElement(component) : null;
  }
}