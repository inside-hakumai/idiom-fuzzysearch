import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ChangeEvent} from "react";

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

  updateQueryValue(event:ChangeEvent<HTMLInputElement>) {
    console.log(event);
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
      </div>
    );
  }

}

ReactDOM.render(<Root />, domRoot);
