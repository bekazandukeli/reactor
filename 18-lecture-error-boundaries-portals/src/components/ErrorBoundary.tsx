import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  // static getDerivedStateFromError(error) {}

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.log(errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <p style={{ color: 'red' }}>Error Happened</p>;
    }

    return this.props.children;
  }
}
