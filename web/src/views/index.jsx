import * as React from "react";

class Index extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel='stylesheet' href='/stylesheets/style.css'/>
      </head>
      <body>
      <h1>{this.props.title}</h1>
      <p>Welcome to {this.props.title}</p>
      </body>
      </html>
    );
  }
}

module.exports = Index;
