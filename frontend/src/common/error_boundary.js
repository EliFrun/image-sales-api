import { Component } from "react";


export class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, msg: "foo" };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            ...this.state,
            msg: error.message
        })
      this.state.msg = error.message;
    }

    render() {
      if (this.state.hasError) {
        return <h1>{this.state.msg}</h1>;
      }

      return this.props.children;
    }
  }