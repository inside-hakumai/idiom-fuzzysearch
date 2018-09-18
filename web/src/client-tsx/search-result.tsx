import * as React from "react";
import {ResultEntity} from "../server/database";

interface Props {
  idioms: ResultEntity[]
}

interface State {}

export class SearchResult extends React.Component<Props, State> {

  constructor(props: Readonly<Props>) {
    super(props);
  }

  render() {
    let list:JSX.Element[] = [];
    for (let i=0; i<this.props.idioms.length; i++) {
      list.push(<li key={this.props.idioms[i].id} className="collection-item">
        {this.props.idioms[i].name}（{this.props.idioms[i].yomi}）
      </li>);
    }

    return (
      <div id='result-wrapper'>
        {(() => {
          if (list.length !== 0) {
            return <ul className="collection">
              {list}
            </ul>
          }
        })()}
      </div>
    );
  }
}
