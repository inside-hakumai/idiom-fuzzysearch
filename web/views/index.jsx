import * as React from "react";

class Index extends React.Component {

  render() {return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel='stylesheet' href='/dist-css/materialize/materialize.css'/>
        <link rel='stylesheet' href='/stylesheets/style.css'/>
      </head>
      <body>

      <div id="root" className="site-wrapper">
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
