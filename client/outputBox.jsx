import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const OutputBox = (props) => (
  <div>
    <h3> B3h0L]) 73h 1337</h3>
    <span id='output'>{props.text.translated}</span>
    <CopyToClipboard text={props.text.translated}>
          <button id='copyButton'>Copy</button>
    </CopyToClipboard>
  </div>
)

export default OutputBox;