import 'whatwg-fetch';
import Vivus from "vivus";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ChangeEvent} from "react";
import {SearchResult} from './search-result';
import {ResultEntity} from "../server/database";

import 'normalize.css';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit';
UIkit.use(Icons);

import "../public/stylesheets/style.scss";

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

  componentDidMount(): void {
    new Vivus('svg-animation',{
      type: 'scenario-sync',
      duration: 4,
      forceRender: false,
      animTimingFunction:Vivus.EASE
    });
  }

  async updateQueryValue(event:ChangeEvent<HTMLInputElement>) {
    const queryString = event.target.value;
    this.setState({queryValue: queryString});
    const searchRes: Response = await fetch(`/search?query=${queryString}`);
    const resJson = await searchRes.json();

    console.log(resJson);

    this.setState({
      searchResult: resJson
    });
  }

  render() {
    return (

      <div className={"content-wrapper " + (this.state.queryValue === "" ? "" : "queried")} >
        <div className="branding-wrapper">
          <div id="logo-wrapper">

            <svg id="svg-animation" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 750 66" xmlSpace="preserve"
                 width="750" height="66">
              <image xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="./images/logo.png" width="750" height="66" mask="url(#clipmask)"></image>
              <mask id="clipmask" maskUnits="objectBoundingBox">
                <path className="st2" d="M7,30c5,9.1,9,16.2,9,16.2"/>
                <line className="st3" x1="17.5" y1="28.5" x2="41" y2="23.1"/>
                <line className="st4" x1="51" y1="25" x2="50" y2="42"/>
                <path className="st5" d="M21.5,28.5c0,0,2,6,1,11"/>
                <path className="st6" d="M28.5,27.5c0,0,0,5,3,7s13,0,13,0"/>
                <path className="st6" d="M17,45c0,0,20,1,27-4"/>
                <path className="st6" d="M84,1c0,0,7,1,7,3s0,5,0,5"/>
                <line className="st6" x1="75" y1="15" x2="78" y2="25"/>
                <path className="st6" d="M77,19c0,0,14-9,24-9s24,0,14,4c-5,2-7,3-7,3"/>
                <path className="st7" d="M87,25c0,0,16.5-5.5,15-4c-7,7-8,8-8,8"/>
                <path className="st8" d="M91.5,32.5c0,0,5,0,6,6s2,7,1,13s-1,9-2,11s-3,2-2-2"/>
                <path className="st6" d="M71,45c0,0,27.5-10.5,41.5-10.5c0,0,6.5,0.5,8.5,1.5"/>
                <line className="st9" x1="141" y1="3" x2="147" y2="6"/>
                <path className="st8" d="M132,15c0,0,9-1,21-7"/>
                <line className="st8" x1="135.5" y1="21.5" x2="139" y2="26"/>
                <path className="st8" d="M141.5,18.5c0,0,11-5,10-3s-6,7-6,7"/>
                <line className="st10" x1="138.5" y1="26.5" x2="145.5" y2="24.5"/>
                <path className="st10" d="M134,33c0,0,15-9,10-3s-5,6-5,6"/>
                <path className="st8" d="M140,36c0,0,4,1,2,10"/>
                <line className="st8" x1="131" y1="48" x2="146.5" y2="31.5"/>
                <path className="st6" d="M160.5,5.5c0,0,1,21-9,34"/>
                <path className="st7" d="M149.5,26.5l17-10c0,0-11,30.8,19.5,22.5c5.5-1.5-4.5-7.5-4.5-7.5"/>
                <line className="st7" x1="153.5" y1="28.5" x2="164.5" y2="32.5"/>
                <line className="st7" x1="133.5" y1="54.5" x2="137.5" y2="62.5"/>
                <line className="st7" x1="145.5" y1="53.5" x2="150.5" y2="60.5"/>
                <line className="st11" x1="156.5" y1="52.5" x2="160.5" y2="57.5"/>
                <line className="st11" x1="171" y1="50" x2="180" y2="59"/>
                <path className="st11" d="M207,7c0,0,9,1,8,7"/>
                <line className="st11" x1="200" y1="23" x2="220" y2="18"/>
                <line className="st11" x1="206" y1="30" x2="215" y2="27"/>
                <line className="st11" x1="205" y1="38" x2="215" y2="36"/>
                <line className="st11" x1="203" y1="48" x2="208" y2="57"/>
                <polyline className="st11" points="208,45 217,43 216,54 	"/>
                <line className="st11" x1="208" y1="56" x2="216" y2="55"/>
                <line className="st11" x1="233" y1="14" x2="244" y2="11"/>
                <line className="st11" x1="238" y1="14" x2="235" y2="28"/>
                <polyline className="st11" points="231,24 247,21 243,31 	"/>
                <path className="st11" d="M227,36c0,0,23-6,31-3"/>
                <line className="st11" x1="231" y1="46" x2="235" y2="56"/>
                <path className="st11" d="M237,43c0,0,9-4,14,0"/>
                <line className="st11" x1="245" y1="44" x2="245" y2="54"/>
                <line className="st11" x1="235" y1="55" x2="245" y2="55"/>
                <path className="st11" d="M274,18c0,0,13,1,23-8"/>
                <path className="st10" d="M286,7c0,0,2,2,1,7s-3,8-4,16s-2,5,0,26"/>
                <path className="st8" d="M288.5,24.5c0,0,3,3,0,10s-12,18-12,18"/>
                <line className="st8" x1="275.5" y1="57.5" x2="271.5" y2="47.5"/>
                <path className="st8" d="M271,45l8-7l11-5l5-2c0,0,4.5-0.5,7.5,0.5S308,35,309,38s1,6,1,9s-1,9-5,12"/>
                <line className="st12" x1="325.5" y1="20.5" x2="338.5" y2="47.5"/>
                <path className="st12" d="M364.5,18.5c0,0,8,5,10,18"/>
                <line className="st6" x1="392.5" y1="10.5" x2="416.5" y2="8.5"/>
                <path className="st6" d="M395,24c0,0,4,3,8,1s8-5,8-5"/>
                <path className="st6" d="M408,4l-1,35c0,0,1,9-15,16l1-9l5-4c0,0,20,1,24,8"/>
                <polyline className="st7" points="439,21 446,33 449,46 452,48 	"/>
                <polyline className="st7" points="476.5,18.5 484.5,26.5 488.5,37.5 	"/>
                <line className="st7" x1="498.5" y1="29.5" x2="517.5" y2="20.5"/>
                <polyline className="st7" points="509.5,5.5 512.5,12.5 512.5,63.5 	"/>
                <path className="st7" d="M509.5,26.5c0,0,1,14-6,21"/>
                <line className="st8" x1="513.5" y1="26.5" x2="516.5" y2="37.5"/>
                <path className="st6" d="M528.5,9.5c0,0-2,14-10,25"/>
                <path className="st7" d="M531,7c0,0,0,5,4,10s7,8,12,11s16,5,16,5"/>
                <line className="st7" x1="527.5" y1="30.5" x2="537.5" y2="26.5"/>
                <path className="st7" d="M518.5,41.5c0,0,4,0,7,3s3,3,3,3"/>
                <polyline className="st7" points="526.5,39.5 545.5,33.5 539.5,42.5 	"/>
                <line className="st7" x1="527.5" y1="46.5" x2="536.5" y2="43.5"/>
                <polyline className="st7" points="531.5,30.5 532.5,52.5 525.5,60.5 	"/>
                <line className="st7" x1="539.5" y1="51.5" x2="556.5" y2="60.5"/>
                <line className="st7" x1="581.5" y1="10.5" x2="603.5" y2="7.5"/>
                <path className="st7" d="M591.5,1.5c0,0,3,3,0,13"/>
                <line className="st7" x1="573.5" y1="19.5" x2="576.5" y2="31.5"/>
                <polyline className="st7" points="574.5,21.5 614.5,15.5 616.5,19.5 611.5,22.5 	"/>
                <polyline className="st7" points="589.5,23.5 582.5,36.5 591.5,35.5 	"/>
                <path className="st7" d="M598.5,22.5c0,0-1,5-3,9s-17,20-6,14s10-6,10-6"/>
                <line className="st7" x1="599.5" y1="34.5" x2="607.5" y2="43.5"/>
                <polyline className="st7" points="595.5,46.5 595.5,63.5 591.5,58.5 	"/>
                <line className="st7" x1="579.5" y1="50.5" x2="580.5" y2="61.5"/>
                <line className="st7" x1="606.5" y1="51.5" x2="613.5" y2="58.5"/>
                <line className="st13" x1="638.5" y1="54.5" x2="641.5" y2="60.5"/>
                <line className="st7" x1="662.5" y1="30.5" x2="661.5" y2="57.5"/>
                <path className="st7" d="M663.5,34.5c0,0,11-11,11-4s-1,30,8,28"/>
                <path className="st7" d="M693.5,41.5c0,0,25,2,9-8c-13.4-8.4-14,24-4,24s14-8,14-8"/>
                <polyline className="st7" points="720.5,35.5 721.5,32.5 738.5,30.5 	"/>
                <path className="st7" d="M728.5,18.5c0,0-5,56,10,36"/>
              </mask>
            </svg>

          </div>
          <p>「あの四字熟語、なんだったっけ・・・？」とお困りのあなたへ</p>
        </div>
        <div className="searchbox-wrapper">
          <div className="uk-inline uk-width-2-3">
            <span className="uk-form-icon" uk-icon="icon: search" />
            <input className="uk-input" type="text" value={this.state.queryValue} onChange={this.updateQueryValue} />
          </div>
        </div>
        <SearchResult idioms={this.state.searchResult} query={this.state.queryValue}/>
      </div>
    );
  }

}

ReactDOM.render(<Root />, domRoot);
