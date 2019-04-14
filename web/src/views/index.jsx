import * as React from "react";

class Index extends React.Component {

  render() {return (
      <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="四字熟語あいまい検索.netは、あいまいな検索ワードから、近い四字熟語を検索するためのサイトです．「目的の四字熟語が正確に思い出せない！なんとなくこんな単語だったけど...」という時に便利です。" />
        <meta name="thumbnail" content="./favicon-32x32.png" />
        <meta name="viewport" content="width=490,initial-scale=1" />
        <meta property="og:description" content="四字熟語あいまい検索.netは、あいまいな検索ワードから、近い四字熟語を検索するためのサイトです．「目的の四字熟語が正確に思い出せない！なんとなくこんな単語だったけど...」という時に便利です。" />
        <meta property="og:title" content="四字熟語あいまい検索.net" />
        <meta property="og:image" content="./favicon-32x32.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="四字熟語あいまい検索.net" />
        <link rel="icon" href="./favicon.ico" />
        <title>四字熟語あいまい検索.net</title>
      </head>
      <body>

      <div id="root" className="site-wrapper uk-container uk-container-small">
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
