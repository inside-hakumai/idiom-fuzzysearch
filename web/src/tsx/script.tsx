import 'materialize-css';
import 'whatwg-fetch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ChangeEvent} from "react";
import {SearchResult} from './search-result';
import {ResultEntity} from "../../server/database";

const domRoot = document.querySelector("#root");

interface Props {
}

interface State {
  queryValue: string
  searchResult: ResultEntity[]
}

class Root extends React.Component<Props, State> {

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      queryValue: "",
      searchResult: []
    };
    this.updateQueryValue = this.updateQueryValue.bind(this);
  }

  async updateQueryValue(event:ChangeEvent<HTMLInputElement>) {
    const queryString = event.target.value;
    this.setState({queryValue: queryString});
    const searchRes: Response = await fetch(`/search?query=${queryString}`);
    const resJson = await searchRes.json();

    this.setState({
      searchResult: resJson
    });
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
        <SearchResult idioms={this.state.searchResult} />
      </div>
    );
  }

}

ReactDOM.render(<Root />, domRoot);
