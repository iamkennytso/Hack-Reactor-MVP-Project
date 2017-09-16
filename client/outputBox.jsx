import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const OutputBox = (props) => (
  <div>
    <h3> Acsend to an 31337</h3>
    <span id='output'>{props.text.translated}</span>
    <CopyToClipboard text={props.text.translated}>
          <button id='copyButton'>Copy</button>
    </CopyToClipboard>
  </div>
)

export default OutputBox;