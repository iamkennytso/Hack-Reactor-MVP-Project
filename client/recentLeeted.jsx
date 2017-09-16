import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const RecentLeeted = (props) => (
  <div className = 'recent5div'>
    <span className = 'recent5span'> {props.leeted}  </span>
      <CopyToClipboard text={props.leeted}>
        <button id='copyButton'>Copy</button>
      </CopyToClipboard>
  </div>
)


export default RecentLeeted;