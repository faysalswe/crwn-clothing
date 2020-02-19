import React, { Component } from "react";
import './error-boundary.styles.scss'
class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-image-overlay">
          <div
            className="error-image-container"
            style={{
              backgroundImage: `url("https://i.imgur.com/yW2W9SC.png")`
            }}
          ></div>
          <h1 className="error-image-text"> Sorry this page is broken </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
