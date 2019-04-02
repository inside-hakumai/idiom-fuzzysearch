import * as React from "react";

class Index extends React.Component {

  render() {return (
      <html>
      <head>
        <title>idiom-fuzzysearch.net</title>
      </head>
      <body>

      <div id="root" className="site-wrapper container">
      </div>
      {/*
      <h1>{this.props.title}</h1>
      <p>Welcome to {this.props.title}</p>
      */}
      <script src='/javascripts/bundle.js'></script>
      </body>
      </html>
    );
  }
}

module.exports = Index;
