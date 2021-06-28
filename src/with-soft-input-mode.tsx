import React from 'react';

import SoftInputMode from 'react-native-soft-input-mode';

export const withSoftInputMode = (
  WrappedComponent: React.ComponentClass<any>,
  mode: number
) => {
  return class extends React.Component {
    constructor(props: {} | Readonly<{}>) {
      super(props);
    }

    componentDidMount() {
      SoftInputMode.set(mode);
    }

    componentWillUnmount() {
      SoftInputMode.reset();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
