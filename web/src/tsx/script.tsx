import 'materialize-css';
import 'whatwg-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ChangeEvent} from "react";
import {SearchResult} from './search-result';

const domRoot = document.querySelector("#root");

interface Props {
}

interface State {
  queryValue: string
}

class Root extends React.Component<Props, State> {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      queryValue: ""
    };
    this.updateQueryValue = this.updateQueryValue.bind(this);
  }

  async updateQueryValue(event:ChangeEvent<HTMLInputElement>) {
    const queryString = event.target.value;
    this.setState({queryValue: queryString});
    const searchRes: Response = await fetch(`/search?query=${queryString}`);
    const resJson = await searchRes.json();
    console.log(resJson);
  }

  render() {
    return (

      <div className="content-wrapper">
        <div className="branding-wrapper">
          <p>idiom-fuzzysearch.net</p>
        </div>
        <div className="searchbox-wrapper">
          <input type="text" value={this.state.queryValue} onChange={this.updateQueryValue} />
        </div>
        <SearchResult />
      </div>
    );
  }

}

ReactDOM.render(<Root />, domRoot);
