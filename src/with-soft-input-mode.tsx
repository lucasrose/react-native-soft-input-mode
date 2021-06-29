import React from 'react';
import { Platform } from 'react-native';

import SoftInputMode from './index';

export const withSoftInputMode = (
  WrappedComponent: React.ComponentClass<any>,
  mode: number
) => {
  if (Platform.OS !== 'android') {
    return <WrappedComponent />;
  }

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
