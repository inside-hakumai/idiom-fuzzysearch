import * as React from "react";

class Index extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel='stylesheet' href='/dist-css/materialize/materialize.css'/>
        <link rel='stylesheet' href='/stylesheets/style.css'/>
      </head>
      <body>
      <div className="site-wrapper">
        <div className="content-wrapper">
          <div className="branding-wrapper">
            <p>idiom-fuzzysearch.net</p>
          </div>
          <div className="searchbox-wrapper">
            <input type="text"/>
          </div>
        </div>
      </div>
      <h1>{this.props.title}</h1>
      <p>Welcome to {this.props.title}</p>
      <script src='/dist-js/materialize/materialize.min.js'></script>
      </body>
      </html>
    );
  }
}

module.exports = Index;
