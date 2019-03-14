import React from 'react';

type State = {
  component: React.Component | null
};

type P = {
  default: React.Component
};

type Props = {
  load: () => Promise<P | React.Component>;
};

export default class extends React.Component<Props, State> {
  state = {
    component: null,
  };

  componentDidMount() {
    const { load } = this.props;
    load().then(component => {
      this.setState({
        component: (component as P).default ? (component as P).default : component as React.Component
      });
    });
  }

  render() {
    const { component } = this.state;
    return component ? React.createElement(component) : null;
  }
}
