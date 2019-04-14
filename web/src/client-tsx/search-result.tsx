import * as React from "react";
import {ResultEntity} from "../server/database";

interface Props {
  idioms: ResultEntity[]
  query: String
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
        {wrapMatchedCharsBySpan(this.props.idioms[i].name, this.props.query)}（{this.props.idioms[i].yomi}）
      </li>;

      if (this.props.idioms[i].score === 100) {
        perfectMatch = targetDom;
      } else {
        fuzzyMatchList.push(<li key={this.props.idioms[i].id} className="collection-item">
          {wrapMatchedCharsBySpan(this.props.idioms[i].name, this.props.query)}（{this.props.idioms[i].yomi}）
        </li>);
      }
    }

    return (
      <div id='result-wrapper'>
        {(() => {
          if (perfectMatch !== null) {
            return <div className='uk-card uk-card-body uk-card-default uk-margin-top'>
              <h3 className="uk-card-title">完全一致</h3>
              <ul className="collection uk-list uk-list-divider">
                {perfectMatch}
              </ul>
            </div>
          }
        })()}
        {(() => {
          if (fuzzyMatchList.length !== 0) {
            return <div className='uk-card uk-card-body uk-card-default uk-margin-top' style={{height: (112 + fuzzyMatchList.length * 42) + "px"}}>
                <h3 className="uk-card-title">もしかして</h3>
                <ul className="collection uk-list uk-list-divider">
                  {fuzzyMatchList}
                </ul>
              </div>
          } else {

          }
        })()}
      </div>
    );
  }
}

function wrapMatchedCharsBySpan(str: String, query: String) : JSX.Element[] {
  let returnDom: JSX.Element[] = [];
  for (let i = 0; i < str.length; i++) {
    returnDom.push(<span className={(query.includes(str[i]) ? "matched" : "")}>{str[i]}</span>);
  }
  return returnDom
}
