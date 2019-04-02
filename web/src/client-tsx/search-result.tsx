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
    let perfectMatch:JSX.Element|null = null;
    let fuzzyMatchList:JSX.Element[] = [];
    for (let i=0; i<this.props.idioms.length; i++) {
      let targetDom:JSX.Element = <li key={this.props.idioms[i].id} className="collection-item">
        {this.props.idioms[i].name}（{this.props.idioms[i].yomi}）- ({this.props.idioms[i].score})
      </li>;

      if (this.props.idioms[i].score === 100) {
        perfectMatch = targetDom;
      } else {
        fuzzyMatchList.push(<li key={this.props.idioms[i].id} className="collection-item">
          {this.props.idioms[i].name}（{this.props.idioms[i].yomi}）- ({this.props.idioms[i].score})
        </li>);
      }
    }

    return (
      <div id='result-wrapper'>
        {(() => {
          if (perfectMatch !== null) {
            return <div className='result-section' id='result-perfect-match'>
              <div className='label'><span>完全一致</span></div>
              <ul className="collection">
                {perfectMatch}
              </ul>
            </div>
          }
        })()}
        {(() => {
          if (fuzzyMatchList.length !== 0) {
            return <div className='result-section' id='result-fuzzy-match'>
              <div className='label'><span>もしかして</span></div>
              <ul className="collection">
                {fuzzyMatchList}
              </ul>
            </div>
          }
        })()}
      </div>
    );
  }
}
